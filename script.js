function startSlideshow() {
  // Ascunde imaginile inițiale
  var initialImages = document.getElementsByClassName("initial-image");
  for (var i = 0; i < initialImages.length; i++) {
    initialImages[i].style.display = "none";
  }


  var slideshowContainer = document.querySelector(".slideshow-container");
  slideshowContainer.style.display = "block";


  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
  }
}