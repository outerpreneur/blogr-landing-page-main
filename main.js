const menuDesktopItem = document.querySelectorAll("header nav ul li");

menuDesktopItem.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("hidden");
    console.log("work?");
  });
});
