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

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (s == 'bigSlider') {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  else {
    for (i = 0; i < slides.length; i++) {
      mainBlockSlides[i].style.display = "none";
    }
    mainBlockSlides[slideIndex-1].style.display = "block";
  }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     mainBlockSlides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
//   mainBlockSlides[slideIndex-1].style.display = "block";
  
}

