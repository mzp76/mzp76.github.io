let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let menuOpened = false;

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  if (!menuOpened) {
    navbar.style.display = "block";
    menuOpened = true;
  } else {
    navbar.style.display = "none";
    menuOpened = false;
  }
};
