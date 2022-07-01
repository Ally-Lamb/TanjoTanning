//Implements at least 6 interactive elements using JavaScript effectively

/*JAVASCRIPT 1 - CALCULATOR FOR PRICING*/
//Implements security features
"use strict";
function calculatePrice()
{ //Tanjo Dark 
    var darkprice = 45.00;
    var quantitydark =  $("#quantitydark").val();
    var total = (quantitydark * darkprice);
    console.log(total);
    $("#darkorderTotal").val(total);
  //Tanjo Medium
    var mediumprice = 40.00;
    var quantitymedium =  $("#quantitymedium").val();
    var total = (quantitymedium * mediumprice);
    console.log(total);
    $("#mediumorderTotal").val(total);
  //Tanjo Light
    var lightprice = 30.00;
    var quantitylight =  $("#quantitylight").val();
    var total = (quantitylight * lightprice);
    console.log(total);
    $("#lightorderTotal").val(total);
  //SubTotal
    var total = (quantitylight * lightprice) + (quantitymedium * mediumprice) + (quantitydark * darkprice);
    console.log(total);
    $("#SubTotal").val(total);
  //GST Calculation
    var entered = (quantitylight * lightprice) + (quantitymedium * mediumprice) + (quantitydark * darkprice);
    var percentage = (15);
    var total = (entered / 100) * (percentage);
    console.log(total);
    $("#GST").val(total);
  //Total
    var entered = (quantitylight * lightprice) + (quantitymedium * mediumprice) + (quantitydark * darkprice);
    var percentage = (15);
    var gst = (entered / 100) * (percentage);
    var total = (entered + gst);
    console.log(total);
    $("#MainTotal").val(total);
}

//JAVASCRIPT 2 - Comparitive Slider Images 
//Implements security features
"use strict";
function initComparisons() {
    var x, i;
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      w = img.offsetWidth;
      h = img.offsetHeight;
      img.style.width = (w / 2) + "px";

      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      img.parentElement.insertBefore(slider, img);
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);
      
      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
        }
      function slideFinish() {
        clicked = 0;
        }
      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }

//JAVASCRIPT 3 - TOGGLE BUTTON LINES TO CROSS
//Implements security features
"use strict";
  function myFunction(x) {
    x.classList.toggle("change");
  }

//JAVASCRIPT 4 - PHONE NUMBER FORMATTING
//Implements security features
"use strict";
  document.getElementById("phone").addEventListener("keydown", function(e) {
    const txt = this.value;
    // prevent more than 14 characters, ignore the spacebar, allow the backspace
    if ((txt.length == 14 || e.which == 32) & e.which !== 8) e.preventDefault();
    // add spaces after 3 & 7 characters, allow the backspace
    if ((txt.length == 3 || txt.length == 7) && e.which !== 8)
      this.value = this.value + " ";
  });


//JAVASCRIPT 5 - ABOUT PAGE SLIDESHOW
//Implements security features
"use strict";
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//JAVASCRIPT 6 
//IMBEDDED ON HTML PAGES TO SHOW DIFFERENT ROUTE OF JAVASCRIPT ACCESS :)
