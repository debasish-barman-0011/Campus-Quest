const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");
const themeToggle = document.querySelector(".theme-toggle");
const html = document.querySelector("html");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/*
themeToggle.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "light") {
    html.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    html.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
*/
