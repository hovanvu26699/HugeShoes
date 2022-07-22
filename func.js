let slideIndex = 1;
showSlides(slideIndex,'bigSlider');
showSlides(slideIndex,'smallSlider');

// Next/previous controls
function plusSlides(n,s) {
  showSlides(slideIndex += n,s);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n,s) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let mainBlockSlides = document.getElementsByClassName("main-block-mySlides  ");

  if (s == 'bigSlider') {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  if (s == 'smallSlider') {
    if (n > mainBlockSlides.length) {slideIndex = 1}
    if (n < 1) { slideIndex = mainBlockSlides.length }
    for (i = 0; i < mainBlockSlides.length; i++) {
      mainBlockSlides[i].style.display = "none";
    }
    mainBlockSlides[slideIndex-1].style.display = "block";
  }
  
}

