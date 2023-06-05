// script.js

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
  });
  