var slider = document.querySelector(".slider");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var slideWidth = slider.clientWidth;
var currentIndex = 0;

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

function slideNext() {
    currentIndex++;
    if (currentIndex > slider.childElementCount - 1) {
      currentIndex = 0;
    }
    slider.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
  }
  
  function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slider.childElementCount - 1;
    }
    slider.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
  }
  
  next.addEventListener("click", function() {
    slideNext();
  });
  
  prev.addEventListener("click", function() {
    slidePrev();
  });