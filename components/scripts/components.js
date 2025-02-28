// Load Header and footer

document.addEventListener('DOMContentLoaded', function() {
    // Load both components first
    Promise.all([
      fetch('./components/header.html').then(response => response.text()),
      fetch('./components/footer.html').then(response => response.text())
    ])
    .then(([headerData, footerData]) => {
      // Insert the components
      document.getElementById('header-placeholder').innerHTML = headerData;
      document.getElementById('footer-placeholder').innerHTML = footerData;
      
      // Initialize Tailwind after components are loaded
      const tailwindScript = document.createElement('script');
      tailwindScript.src = 'https://unpkg.com/@tailwindcss/browser@4';
      document.body.appendChild(tailwindScript);
    })
    .catch(error => {
      console.error('Error loading components:', error);
    });
  });