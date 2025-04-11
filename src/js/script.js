document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle")
  const menu = document.querySelector("header nav");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  })
})