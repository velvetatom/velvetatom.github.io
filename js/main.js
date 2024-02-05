const boostrapMenu = () => {
  const $responsiveMenu = document.querySelector(".js-responsive-menu");
  const $hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const $container = document.querySelector(".container");

  const showMenu = () => {
    $responsiveMenu.classList.remove("!hidden");
    $responsiveMenu.classList.add("!flex");
    $hamburgerMenu.classList.add("header__hamburger-menu--active");
    $container.classList.add("!hidden");
  };

  const hideMenu = () => {
    $responsiveMenu.classList.remove("!flex");
    $hamburgerMenu.classList.remove("header__hamburger-menu--active");
    $responsiveMenu.classList.add("!hidden");
    $container.classList.remove("!hidden");
  };

  $hamburgerMenu.addEventListener("click", function() {
    if ($responsiveMenu.classList.contains("!hidden")) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  document.addEventListener("click", function(e) {
    if (
      !document.querySelector(".js-responsive-menu-wrapper").contains(e.target)
    ) {
      hideMenu();
    }
  });
};

boostrapMenu();
