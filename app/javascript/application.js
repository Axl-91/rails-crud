// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

import "bootstrap"

import "controllers"

document.addEventListener('turbo:load', function() {
  let dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function(dropdown) {
    new bootstrap.Dropdown(dropdown);  // Reinitialize Bootstrap Dropdowns
  });
});

