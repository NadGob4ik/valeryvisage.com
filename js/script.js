document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a.nav-link, a.btn");
  const logo = document.querySelector(".navbar-brand img");
  const scrollButton = document.querySelector(".scroll-to-top");
  const footer = document.querySelector("footer");

  // Плавная прокрутка страницы к верху при клике на кнопку
  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Отображение или скрытие кнопки прокрутки вверх при прокрутке страницы
  window.addEventListener("scroll", function() {
    // Если пользователь прокрутил вниз от верха экрана на 500 пикселей, показываем кнопку прокрутки вверх
    if (window.pageYOffset > 500) {
      scrollButton.style.display = "flex";
    } else {
      // В противном случае скрываем кнопку прокрутки вверх
      scrollButton.style.display = "none";
    }

    // Скрываем кнопку прокрутки вверх, если она пересекает footer
    const footerRect = footer.getBoundingClientRect();
    const scrollButtonRect = scrollButton.getBoundingClientRect();

    if (scrollButtonRect.bottom > footerRect.top) {
      scrollButton.style.display = "none";
    }
  });

  // Плавная прокрутка по якорным ссылкам
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const target = document.querySelector(this.hash);
        window.scroll({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  logo.addEventListener("click", function(event) {
    event.preventDefault();
    const homeSection = document.getElementById("home");
    window.scroll({
      top: homeSection.offsetTop,
      behavior: "smooth"
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
