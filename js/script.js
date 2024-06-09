document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a.nav-link, a.btn");
  const logo = document.querySelector(".navbar-brand img");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const target = document.querySelector(this.hash);
        window.scroll({
          top: target.offsetTop,
          behavior: "smooth" // делаем прокрутку плавной
        });
      }
    });
  });

  logo.addEventListener("click", function(event) {
    event.preventDefault();
    const homeSection = document.getElementById("home");
    window.scroll({
      top: homeSection.offsetTop,
      behavior: "smooth" // делаем прокрутку плавной
    });
  });

  logo.addEventListener("mouseenter", () => scaleLogo(logo));
  logo.addEventListener("mouseleave", () => resetLogoScale(logo));

  function scaleLogo(logo) {
    logo.style.transition = "transform 0.3s ease";
    logo.style.transform = "scale(0.95)";
  }

  function resetLogoScale(logo) {
    logo.style.transition = "transform 0.3s ease";
    logo.style.transform = "scale(1)";
  }
});
