// Load Header and footer

document.addEventListener('DOMContentLoaded', function() {
    // Get the base URL for your site
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
    
    fetch(baseUrl + 'components/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
      
    fetch(baseUrl + 'components/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  });