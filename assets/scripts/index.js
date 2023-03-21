

(function () {
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

  $(document).ready(function () {

    $("#btnUp").click(function () {
      $("html").animate({
        scrollTop: 0
      }, 'slow');
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#btnUp").fadeIn('slow');
      } else {
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

// Carrusel de imagenes
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const prevBtn = carousel.querySelector('.icon-circle-left');
const nextBtn = carousel.querySelector('.icon-circle-right');
let counter = 0;

slides[counter].classList.add('active');

setInterval(() => {
  hideSlide();
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  showSlide();
}, 3000);

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

function showSlide() {
  slides[counter].classList.add('active');
}

function hideSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}

function toggleSidebar() {
  document.getElementById("sidebar1").classList.toggle("show");
  document.querySelector("button span").classList.toggle("rotate");
}
/*para ver codigo*/
(function () {
  var alertBtn = document.getElementById("alertiBtn"),
    modAlert = document.getElementById("modAlert"),
    showBtn = document.getElementById("showBtn");

  function Show() {
    modAlert.classList.remove("oculto");
  }

  function Hide() {
    modAlert.classList.add("oculto");

  }

  showBtn.addEventListener("click", Show);
  alertBtn.addEventListener("click", Hide);


})();
(function () {
  var alertBtn1 = document.getElementById("alertiBtn1"),
    modAlert1 = document.getElementById("modAlert1"),
    showBtn1 = document.getElementById("showBtn1");

  function Show() {
    modAlert1.classList.remove("oculto");
  }

  function Hide() {
    modAlert1.classList.add("oculto");

  }

  showBtn1.addEventListener("click", Show);
  alertBtn1.addEventListener("click", Hide);
})();
(function () {
  var alertBtn2 = document.getElementById("alertiBtn2"),
    modAlert2 = document.getElementById("modAlert2"),
    showBtn2 = document.getElementById("showBtn2");

  function Show() {
    modAlert2.classList.remove("oculto");
  }

  function Hide() {
    modAlert2.classList.add("oculto");

  }

  showBtn2.addEventListener("click", Show);
  alertBtn2.addEventListener("click", Hide);
})();
(function () {
  var alertBtn3 = document.getElementById("alertiBtn3"),
    modAlert3 = document.getElementById("modAlert3"),
    showBtn3 = document.getElementById("showBtn3");

  function Show() {
    modAlert3.classList.remove("oculto");
  }

  function Hide() {
    modAlert3.classList.add("oculto");

  }

  showBtn3.addEventListener("click", Show);
  alertBtn3.addEventListener("click", Hide);
})();
//Modo oscuro
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
  var labe = document.getElementById("label1");
  labe.style.backgroundColor = "rgb(51, 4, 65)"
  var side =document.getElementById("sidebar1");
  side.style.backgroundColor = "gray"
  var x = document.getElementsByClassName("header");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "black";
  }
  var y = document.getElementsByClassName("tipo");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].style.color = "gray";
  }

}
function lightMode() {
  var element = document.body;
  element.className = "light-mode";
  var labe = document.getElementById("label1");
  labe.style.backgroundColor = "#D9D9D9"
}
  var side =document.getElementById("sidebar1")
  side.style.backgroundColor = "#c3acd0";
  var x = document.getElementsByClassName("header");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#664187";
  }
  var y = document.getElementsByClassName("tipo");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].style.color = "#664187";
  }

  // Modales Uriel R
  (function () {
    var alertBtn4 = document.getElementById("alertiBtn4"),
      modAlert4 = document.getElementById("modAlert4"),
      showBtn4 = document.getElementById("showBtn4");
  
    function Show() {
      modAlert4.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert4.classList.add("oculto");
  
    }
  
    showBtn4.addEventListener("click", Show);
    alertBtn4.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn5 = document.getElementById("alertiBtn5"),
      modAlert5 = document.getElementById("modAlert5"),
      showBtn5 = document.getElementById("showBtn5");
  
    function Show() {
      modAlert5.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert5.classList.add("oculto");
  
    }
  
    showBtn5.addEventListener("click", Show);
    alertBtn5.addEventListener("click", Hide);
  })();


  (function () {
    var alertBtn6 = document.getElementById("alertiBtn6"),
      modAlert6 = document.getElementById("modAlert6"),
      showBtn6 = document.getElementById("showBtn6");
  
    function Show() {
      modAlert6.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert6.classList.add("oculto");
  
    }
  
    showBtn6.addEventListener("click", Show);
    alertBtn6.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn7 = document.getElementById("alertiBtn7"),
      modAlert7 = document.getElementById("modAlert7"),
      showBtn7 = document.getElementById("showBtn7");
  
    function Show() {
      modAlert7.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert7.classList.add("oculto");
  
    }
  
    showBtn7.addEventListener("click", Show);
    alertBtn7.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn8 = document.getElementById("alertiBtn8"),
      modAlert8 = document.getElementById("modAlert8"),
      showBtn8 = document.getElementById("showBtn8");
  
    function Show() {
      modAlert8.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert8.classList.add("oculto");
  
    }
  
    showBtn8.addEventListener("click", Show);
    alertBtn8.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn9 = document.getElementById("alertiBtn9"),
      modAlert9 = document.getElementById("modAlert9"),
      showBtn9 = document.getElementById("showBtn9");
  
    function Show() {
      modAlert9.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert9.classList.add("oculto");
  
    }
  
    showBtn9.addEventListener("click", Show);
    alertBtn9.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn10 = document.getElementById("alertiBtn10"),
      modAlert10 = document.getElementById("modAlert10"),
      showBtn10 = document.getElementById("showBtn10");
  
    function Show() {
      modAlert10.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert10.classList.add("oculto");
  
    }
  
    showBtn10.addEventListener("click", Show);
    alertBtn10.addEventListener("click", Hide);
  })();

  (function () {
    var alertBtn11 = document.getElementById("alertiBtn11"),
      modAlert11 = document.getElementById("modAlert11"),
      showBtn11 = document.getElementById("showBtn11");
  
    function Show() {
      modAlert11.classList.remove("oculto");
    }
  
    function Hide() {
      modAlert11.classList.add("oculto");
  
    }
  
    showBtn11.addEventListener("click", Show);
    alertBtn11.addEventListener("click", Hide);
  })();
  
