const burgerMenu = document.querySelector(".burgerMenu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menuOverlay");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.style.display = "block";
  if (!menu.classList.contains("active")) {
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300);
  }
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
});

//
const menuButtons = document.querySelectorAll(".menuBtn");
const menuLists = document.querySelectorAll(".menuList");

menuButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    // Закрываем все другие меню
    menuButtons.forEach((btn, i) => {
      if (i !== index) {
        btn.classList.remove("active");
        menuLists[i].classList.remove("active");
      }
    });

    // Открываем или закрываем текущее меню
    menuLists[index].classList.toggle("active");
    button.classList.toggle("active");
    event.stopPropagation();
  });
});

document.addEventListener("click", (event) => {
  menuButtons.forEach((button, index) => {
    if (
      !button.contains(event.target) &&
      !menuLists[index].contains(event.target)
    ) {
      menuLists[index].classList.remove("active");
      button.classList.remove("active");
    }
  });
});
//
