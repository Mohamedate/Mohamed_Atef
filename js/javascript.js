AOS.init({
  once: true,
});
/* ================ 
Show menu
=================*/
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/* ================ 
Show menu
=================*/
let navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/* ================ 
project section
=================*/
let filterButton = document.querySelectorAll(".filter-project li");

let projectBox = document.querySelectorAll(".projects-content");

filterButton.forEach((li) => {
  li.addEventListener("click", function () {
    filterButton.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");

    projectBox.forEach((box) => (box.style.display = "none"));

    projectBox.forEach((box) => {
      document.querySelectorAll(this.dataset.project).forEach((el) => {
        el.style.display = "block";
      });
    });
  });
});

/* ================ 
scroll section active
=================*/

let sections = document.querySelectorAll("section[id]");
let scrollActive = () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 60,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/* ================ 
show scroll button
=================*/
let scrollUp = () => {
  let scrollUpButton = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUpButton.classList.add("show-button")
    : scrollUpButton.classList.remove("show-button");
};
window.addEventListener("scroll", scrollUp);

/* ================ 
dark theme
=================*/

let themeButton = document.getElementById("theme-button"),
  imageShapes = document.querySelectorAll(".image-shape"),
  darkTheme = "dark-theme";

themeButton.addEventListener("click", () => {
  if (themeButton.classList.contains("light")) {
    imageShapes.forEach((el) => {
      el.src = "images/shapeblack.svg";
    });
    document.body.classList.add(darkTheme);
    themeButton.classList.remove("light");
    themeButton.classList.add("dark");
    themeButton.innerHTML =
      '<i class="fa-solid fa-sharp fa-sun change-theme"></i>';
  } else {
    imageShapes.forEach((el) => {
      el.src = "images/shpaewhite.svg";
    });
    document.body.classList.remove(darkTheme);
    themeButton.classList.remove("dark");
    themeButton.classList.add("light");
    themeButton.innerHTML = '<i class="fa-solid fa-moon change-theme"></i>';
  }
});

/* ================ 
change background header when scroll down
=================*/
let scrollHeader = () => {
  let header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("background-header")
    : header.classList.remove("background-header");
};
window.addEventListener("scroll", scrollHeader);
