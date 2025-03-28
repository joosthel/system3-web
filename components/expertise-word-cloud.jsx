"use client"

import React, { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

const ReactP5Wrapper = dynamic(() => import('react-p5').then((mod) => {
  return mod.default;
}), {
  ssr: false,
});

export default function ExpertiseWordCloud() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Update dimensions when the component mounts and when window resizes
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Define Point class outside of the component
  class Point {
    constructor(p5, x, y, text) {
      this.p5 = p5;
      this.x = x;
      this.y = y;
      this.text = text;
      this.noiseOffsetX = p5.random(1000);
      this.noiseOffsetY = p5.random(1000);
      this.connectedPoints = new Set();
    }
    
    move(noiseScale, noiseStrength) {
      let dx = this.p5.map(this.p5.noise(this.noiseOffsetX), 0, 1, -1, 1) * noiseStrength;
      let dy = this.p5.map(this.p5.noise(this.noiseOffsetY), 0, 1, -1, 1) * noiseStrength;
      
      this.x += dx;
      this.y += dy;
      
      // Wrap around edges
      this.x = (this.x + dimensions.width) % dimensions.width;
      this.y = (this.y + dimensions.height) % dimensions.height;
      
      this.noiseOffsetX += noiseScale;
      this.noiseOffsetY += noiseScale;
    }
    
    display() {
        // Draw the point itself
        this.p5.fill(50);
        this.p5.noStroke();
        this.p5.ellipse(this.x, this.y, 8);
        
        // Text styling - bigger and bolder
        this.p5.textSize(16);  // Increase text size
        this.p5.textStyle(this.p5.REGULAR);  // Make text bold
        this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
        
        // Text with white background for better readability
        const textWidth = this.p5.textWidth(this.text);
        const padding = 2.5;
        
        // Draw text background/highlight
        this.p5.fill(255, 250); // Semi-transparent white
        this.p5.stroke(0, 30);
        this.p5.strokeWeight(0);
        this.p5.rect(
          this.x - textWidth/2 - padding/2, 
          this.y + 5 - padding/2,
          textWidth + padding,
          24 + padding,
          4  // Rounded corners
        );
        
        // Draw the text
        this.p5.fill(0);  // Black text
        this.p5.noStroke();
        this.p5.text(this.text, this.x, this.y + 17);
      }
    
    isOver(px, py) {
      return this.p5.dist(px, py, this.x, this.y) < 6;
    }
  }

  // State for points and other variables
  const [cloudState] = useState({
    points: [],
    numPoints: 26,
    connectionRadius: 300,
    minRadius: 150,
    maxRadius: 700,
    draggedPoint: null,
    noiseScale: 0.008,
    noiseStrength: 2,
    customTexts: [
      "3D-Visualization", "Generative Design", "Motion Graphics",
      "Data Visualization", "Immersive Experience Design", "Digital R&D",
      "Spatial Systems", "Computational Design", "Webdesign",
      "Augmented Reality", "Data Sculpting", "Interactive Web",
      "Advanced Design", "Procedural Modelling", 
      "Algorithmic Design", "Digital Twins", 
      "Prototyping", "Data Mapping", 
      "Visualization", "Generative Art", 
      "Immersive Data", "Spatial Design",
      "Digital Fabrication", "Generative AI",
      "Custom AI Solutions", "UX Design"
    ]
  });

  // Calculate connection radius based on canvas size
  const calculateConnectionRadius = (p5) => {
    let size = p5.min(dimensions.width, dimensions.height);
    cloudState.connectionRadius = p5.map(size, 300, 1920, cloudState.minRadius, cloudState.maxRadius);
    cloudState.connectionRadius = p5.constrain(cloudState.connectionRadius, cloudState.minRadius, cloudState.maxRadius);
  };

  // Setup function - this will be called once
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);
    
    calculateConnectionRadius(p5);
    
    p5.frameRate(60);
    p5.textAlign(p5.LEFT, p5.CENTER);
    
    // Create initial points with custom texts
    cloudState.points = [];
    for (let i = 0; i < cloudState.numPoints; i++) {
      let text = i < cloudState.customTexts.length ? cloudState.customTexts[i] : `Point ${i + 1}`;
      cloudState.points.push(new Point(p5, p5.random(dimensions.width), p5.random(dimensions.height), text));
    }
  };

  // Draw function - this will be called on every frame
  const draw = (p5) => {
    p5.background('#FFFFFF');
    
    // Update and display points
    for (let point of cloudState.points) {
      if (point !== cloudState.draggedPoint) {
        point.move(cloudState.noiseScale, cloudState.noiseStrength);
      }
      point.display();
    }
    
    // Check for connections and draw them
    for (let i = 0; i < cloudState.points.length; i++) {
      for (let j = i + 1; j < cloudState.points.length; j++) {
        let d = p5.dist(cloudState.points[i].x, cloudState.points[i].y, 
                        cloudState.points[j].x, cloudState.points[j].y);
        if (d < cloudState.connectionRadius) {
          p5.stroke(100, 100, 100, p5.map(d, 0, cloudState.connectionRadius, 255, 0));
          p5.strokeWeight(1.5);
          p5.line(cloudState.points[i].x, cloudState.points[i].y, 
                 cloudState.points[j].x, cloudState.points[j].y);
          cloudState.points[i].connectedPoints.add(cloudState.points[j]);
          cloudState.points[j].connectedPoints.add(cloudState.points[i]);
        } else {
          cloudState.points[i].connectedPoints.delete(cloudState.points[j]);
          cloudState.points[j].connectedPoints.delete(cloudState.points[i]);
        }
      }
    }
  };

  // Mouse events
  const mousePressed = (p5) => {
    for (let point of cloudState.points) {
      if (point.isOver(p5.mouseX, p5.mouseY)) {
        cloudState.draggedPoint = point;
        break;
      }
    }
  };

  const mouseDragged = (p5) => {
    if (cloudState.draggedPoint) {
      let dx = p5.mouseX - cloudState.draggedPoint.x;
      let dy = p5.mouseY - cloudState.draggedPoint.y;
      cloudState.draggedPoint.x = p5.mouseX;
      cloudState.draggedPoint.y = p5.mouseY;
      
      // Move connected points
      for (let connectedPoint of cloudState.draggedPoint.connectedPoints) {
        connectedPoint.x += dx * 0.3; 
      }
    }
  };

  const mouseReleased = () => {
    cloudState.draggedPoint = null;
  };

  // Window resize handling
  const windowResized = (p5) => {
    if (containerRef.current) {
      p5.resizeCanvas(dimensions.width, dimensions.height);
      calculateConnectionRadius(p5);
    }
  };

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "100%", 
        minHeight: "400px" 
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ReactP5Wrapper 
          setup={setup} 
          draw={draw} 
          windowResized={windowResized}
          mousePressed={mousePressed}
          mouseDragged={mouseDragged}
          mouseReleased={mouseReleased}
        />
      )}
    </div>
  );
}