

(function(){
    const hideBtn1 = document.getElementById("hideBtn1"),
    hideBtn2 = document.getElementById("hideBtn2"),
    hideBtn3 = document.getElementById("hideBtn3"),
    hideBtn4 = document.getElementById("hideBtn4"),
    hideBtn5 = document.getElementById("hideBtn5");
    const alert1 = document.getElementById("alert1"),
    alert2 = document.getElementById("alert2"),
    alert3 = document.getElementById("alert3"),
    alert4 = document.getElementById("alert4"),
    alert5 = document.getElementById("alert5");

    $(document).ready(function(){

    $("#btnUp").click(function(){
        $("html").animate({
            scrollTop: 0
        }, 'slow');
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $("#btnUp").fadeIn('slow');
        }else{
            $("#btnUp").fadeOut('slow')
        }
    })

    });
    hideBtn1.addEventListener("click", () => {
        alert1.remove();
    });
    hideBtn2.addEventListener("click", () => {
        alert2.remove();
    });
    hideBtn3.addEventListener("click", () => {
        alert3.remove();
    });
    hideBtn4.addEventListener("click", () => {
        alert4.remove();
    });
    hideBtn5.addEventListener("click", () => {
        alert5.remove();
    });
   
})();

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');
let counter = 0;

// Show the first slide
slides[counter].classList.add('active');

// Autoplay the carousel
setInterval(() => {
  hideSlide();
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  showSlide();
}, 3000);

// Handle click events for navigation buttons
prevBtn.addEventListener('click', () => {
  hideSlide();
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  showSlide();
});

nextBtn.addEventListener('click', () => {
  hideSlide();
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  showSlide();
});

// Show the current slide
function showSlide() {
  slides[counter].classList.add('active');
}

// Hide all slides
function hideSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}
