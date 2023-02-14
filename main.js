const menuDesktopItem = document.querySelectorAll("header nav ul li");
const arrowIcon = document.querySelectorAll(".arrow");

menuDesktopItem.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.childNodes[1]);
    link.nextElementSibling.classList.toggle("hidden");
    link.childNodes[1].style.transform = "rotate(180deg)";
  });
});
