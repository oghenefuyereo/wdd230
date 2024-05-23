document.addEventListener("DOMContentLoaded", function() {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  
  galleryImages.forEach(function(img) {
      img.addEventListener('load', function() {
          img.classList.add('loaded');
      });
  });
});
