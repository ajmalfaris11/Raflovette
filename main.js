function navButtonActive() {
  const nvBtn = document.getElementById('nvBtn');
  const dragHandle = document.getElementById('nav-btn');  
  const navSecDiv = document.getElementById('navMenuDiv');

  if (!nvBtn || !dragHandle || !navSecDiv) return;

  let isOpen = false;

  nvBtn.addEventListener('click', function() {
    if (isOpen) {
      dragHandle.textContent = 'drag_handle';
      navSecDiv.style.background = '';
    } else {
      dragHandle.textContent = 'close';
      navSecDiv.style.background = "linear-gradient(to bottom,#41116f ,#32094e)";
    }
    isOpen = !isOpen;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  navButtonActive();
});



let lastScrollTop = 0;
const navbarImg = document.getElementById("nav-img");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav");

if (navbarImg && logo && nav) {
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      navbarImg.style.top = "-100px";
      logo.style.top = "-100px";
      nav.style.top = "-100px";
    } else {
      navbarImg.style.top = "0px";
      logo.style.top = "0px";
      nav.style.top = "0px";
    }
    lastScrollTop = scrollTop;
  });
}


// ======== Like Function Start From Here =========

const likedStates = new Map();

function liked(index) {
  const wishElements = document.getElementsByClassName("wish");
  
  if (!wishElements[index]) return;
  
  const wish = wishElements[index];
  const isLiked = likedStates.get(index) || false;
  
  if (!isLiked) {
    wish.classList.remove("bi-heart");
    wish.classList.add("bi-heart-fill");
    wish.style.color = "#ee2a7b";
    likedStates.set(index, true);
  } else {
    wish.classList.remove("bi-heart-fill");
    wish.classList.add("bi-heart");
    wish.style.color = "#391373";
    likedStates.set(index, false);
  }
}




