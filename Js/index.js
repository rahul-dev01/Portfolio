function themeToggle() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    // Toggle dark mode
    body.classList.toggle('dark-mode');
  
    // Switch icon between moon and sun
    if (body.classList.contains('dark-mode')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
  
    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  // Load theme on page load
  window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  }