const menuDesktopItem = document.querySelectorAll("header nav ul li");
const arrowIcon = document.querySelectorAll(".arrow");
const menuMobileIcon = document.querySelector(".hamburguer-menu");
const menuMobileContainer = document.querySelector(".menu-mobile-container");
const subMenuMobileLink = document.querySelectorAll(".mobile-link");

menuDesktopItem.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.childNodes[1]);
    link.nextElementSibling.classList.toggle("hidden");
    link.childNodes[1].classList.toggle("rotate");
  });
});

menuMobileIcon.addEventListener("click", () => {
  menuMobileContainer.classList.toggle("hidden");
});

subMenuMobileLink.forEach((mobileLink) => {
  mobileLink.addEventListener("click", () => {
    mobileLink.nextElementSibling.classList.toggle("hidden");
    mobileLink.childNodes[1].classList.toggle("rotate");
  });
});
