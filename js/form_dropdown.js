class FormHandler {
  constructor() {
    this.forms = document.querySelector(".forms-sign");
    this.pwShowHide = document.querySelectorAll(".eye-icon");
    this.links = document.querySelectorAll(".link");
    this.showFormButtons = document.querySelectorAll(".show-form");
    this.closeFormButton = document.querySelectorAll(".close-form"); // Изменено на querySelectorAll
    this.loginForm = document.getElementById("login-form");
    this.registerForm = document.getElementById("register-form");
    this.overlay = document.getElementById("overlay");

    this.pwShowHide.forEach(eyeIcon => {
      eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
          if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
          }
          password.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
        });
      });
    });

    const overlay = document.getElementById("overlay");
    const form = document.querySelector(".forms-sign");

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        form.classList.remove("show-signup");
        overlay.style.display = "none";
      }
    });

    this.links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        this.forms.classList.toggle("show-signup");
      });
    });

    this.showFormButtons.forEach(button => {
      button.addEventListener("click", () => {
        this.forms.classList.add("show");
        this.overlay.style.display = "flex";
      });
    });

    this.closeFormButton.forEach(button => {
      button.addEventListener("click", () => {
        this.forms.classList.remove("show");
        this.overlay.style.display = "none";
      });
    });

    document.getElementById("show-login").addEventListener("click", () => {
      this.loginForm.classList.add("show");
      this.registerForm.classList.remove("show");
    });

    document.getElementById("show-register").addEventListener("click", () => {
      this.loginForm.classList.remove("show");
      this.registerForm.classList.add("show");
    });
  }
}

const formHandler = new FormHandler();

function setupDropdownMenu() {
  $('.dropdown-toggle').on('click', function () {
    var $menu = $(this).next('.dropdown-menu');
    $('.dropdown-menu').not($menu).removeClass('open');
    $menu.toggleClass('open');
  });
}

$(document).ready(setupDropdownMenu);