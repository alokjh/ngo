let hiddenCard = document.getElementById("hidden-card-container");
let aboutDropdown = document.getElementById("about-dropdown");
let navAbout = document.getElementById("nav-about");
const myNav = document.getElementById("home");
let navWhat = document.getElementById("what");
let whatDrop = document.getElementById("what-dropdown");
let navRes = document.getElementById("res");
let resDrop = document.getElementById("res-dropdown");
let navGallery = document.getElementById("navGallery");
let galleryDrop = document.getElementById("gallery-dropdown");
navAbout.addEventListener("mouseenter", () => {
  aboutDropdown.style.display = "flex";
  console.log("Aboutt");
});
navAbout.addEventListener("mouseleave", () => {
  aboutDropdown.style.display = "none";
});

aboutDropdown.addEventListener("mouseenter", () => {
  aboutDropdown.style.display = "flex";
});
aboutDropdown.addEventListener("mouseleave", () => {
  aboutDropdown.style.display = "none";
});

navWhat.addEventListener("mouseenter", () => {
  whatDrop.style.display = "flex";
});
navWhat.addEventListener("mouseleave", () => {
  whatDrop.style.display = "none";
});

whatDrop.addEventListener("mouseenter", () => {
  whatDrop.style.display = "flex";
});
whatDrop.addEventListener("mouseleave", () => {
  whatDrop.style.display = "none";
});

// navRes.addEventListener("mouseenter", () => {
//   resDrop.style.display = "flex";
// });
// navRes.addEventListener("mouseleave", () => {
//   resDrop.style.display = "none";
// });

// resDrop.addEventListener("mouseenter", () => {
//   resDrop.style.display = "flex";
// });
// resDrop.addEventListener("mouseleave", () => {
//   resDrop.style.display = "none";
// });

navGallery.addEventListener("mouseenter", () => {
  galleryDrop.style.display = "flex";
});
navGallery.addEventListener("mouseleave", () => {
  galleryDrop.style.display = "none";
});

galleryDrop.addEventListener("mouseenter", () => {
  galleryDrop.style.display = "flex";
});
galleryDrop.addEventListener("mouseleave", () => {
  galleryDrop.style.display = "none";
});

window.onscroll = function () {
  if (document.body.scrollTop >= 0) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.remove("nav-colored");
    myNav.classList.add("nav-transparent");
  }
};
