function navButtonActive() {
  let nvBtn = document.getElementById('nvBtn');
  let dragHandle = document.getElementById('nav-btn');  
  let navSecDiv =document.getElementById('navMenuDiv');

  let isOpen = false; // Track the current mode

  nvBtn.addEventListener('click', function() {
    if (isOpen) {
      dragHandle.textContent = 'drag_handle'; // Change to previous mode
      navSecDiv.style.background='';
      
    } else {
      dragHandle.textContent = 'close'; // Change to new mode
      navSecDiv.style.background= "linear-gradient(to bottom,#41116f ,#32094e)";
     
    }
    isOpen = !isOpen; // Toggle the mode
  });
}

document.addEventListener('DOMContentLoaded', function() {
  navButtonActive();
});



var wdt = screen.width;
var lastScrollTop = 0;
navbarImg = document.getElementById("nav-img");
logo = document.getElementById("logo");
nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
  if(scrollTop >lastScrollTop){
                
    navbarImg.style.top = "-100px";
    logo.style.top = "-100px";
    nav.style.top = "-100px";


}

else{
navbarImg.style.top="0px";
logo.style.top="0px";
nav.style.top="0px";

}
lastScrollTop = scrollTop;
})


// ======== Like Function Strat From Here =========

var nm=0;
 function liked (a){
  
  let wish = document.getElementsByClassName("wish");

  if (nm==0){
    wish[a].classList.remove("bi-heart");
    wish[a].classList.add("bi-heart-fill");
    nm++;
    wish[a].style.color = "#ee2a7b";

  }
  else{
    wish[a].classList.remove("bi-heart-fill");
    wish[a].classList.add("bi-heart");
    nm--;
    wish[a].style.color = "#391373";
   
  }
  
}




