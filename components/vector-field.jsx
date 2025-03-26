"use client"

import React, { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

// Will only import `react-p5` on client-side
const ReactP5Wrapper = dynamic(() => import('react-p5').then((mod) => {
  return mod.default;
}), {
  ssr: false,
});

export default function VectorField() {
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

  // Define Vector class outside of the component
  class Vector {
    constructor(p5, x, y) {
      this.p5 = p5;
      this.pos = { x, y };
      this.dir = { x: 0, y: 0 };
      this.length = 25;
      this.angle = 0;
    }

    updateAngle(noiseScale, time) {
      let noiseValue = this.p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale, time);
      this.angle = this.p5.map(noiseValue, 0, 1, 0, this.p5.TWO_PI);
    }

    calc_move(targetX, targetY, influenceRadius) {
      let dx = targetX - this.pos.x;
      let dy = targetY - this.pos.y;
      let distance = this.p5.sqrt(dx*dx + dy*dy);

      if (distance < influenceRadius) {
        // Calculate influence based on distance
        let influence = this.calculateInfluence(distance, influenceRadius);
        
        // Gradually change angle based on influence
        let targetAngle = this.p5.atan2(dy, dx);
        this.angle = this.p5.lerp(this.angle, targetAngle, influence);
      }

      this.dir.x = this.pos.x + this.p5.cos(this.angle) * this.length;
      this.dir.y = this.pos.y + this.p5.sin(this.angle) * this.length;
    }

    calculateInfluence(distance, maxDistance) {
      return 1 - Math.pow(distance / maxDistance, 2);
    }

    print() {
      this.p5.stroke('#000000');
      this.p5.strokeWeight(0.5);
      this.p5.line(this.pos.x, this.pos.y, this.dir.x, this.dir.y);
      
      this.p5.push();
      this.p5.translate(this.dir.x, this.dir.y);
      this.p5.rotate(this.angle);
      this.p5.fill('#000000');
      this.p5.triangle(0, 0, -5, -2.5, -5, 2.5);
      this.p5.pop();
    }
  }

  // Storage for vectors (using state so it persists between renders)
  const [vectorsState] = useState({
    vectors: [],
    influenceRadius: 250,
    noiseScale: 0.003,
    noiseSpeed: 0.0075
  });

  // Setup function - this will be called once
  const setup = (p5, canvasParentRef) => {
    // Create canvas with the parent container's dimensions
    p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);
    createVectors(p5);
  };

  // Draw function - this will be called on every frame
  const draw = (p5) => {
    p5.background('#FFFFFF');
    
    let time = p5.frameCount * vectorsState.noiseSpeed;
    
    // Calculate mouse position relative to the canvas
    const mouseX = p5.mouseX;
    const mouseY = p5.mouseY;
    
    for (let vec of vectorsState.vectors) {
      vec.updateAngle(vectorsState.noiseScale, time);
      vec.calc_move(mouseX, mouseY, vectorsState.influenceRadius);
      vec.print();
    }

    p5.noFill();
    p5.stroke(223);
    p5.ellipse(mouseX, mouseY, vectorsState.influenceRadius * 2);
  };

  // Window resize function
  const windowResized = (p5) => {
    if (containerRef.current) {
      p5.resizeCanvas(dimensions.width, dimensions.height);
      createVectors(p5);
    }
  };

  // Helper function to create vectors
  const createVectors = (p5) => {
    vectorsState.vectors = [];
    // Create a grid of vectors within the canvas area
    for (let x = 20; x < dimensions.width; x += 40) {
      for (let y = 20; y < dimensions.height; y += 40) {
        vectorsState.vectors.push(new Vector(p5, x, y));
      }
    }
  };

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "100%", 
        minHeight: "300px" 
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <ReactP5Wrapper 
          setup={setup} 
          draw={draw} 
          windowResized={windowResized} 
          dimensions={dimensions} 
        />
      )}
    </div>
  );
}