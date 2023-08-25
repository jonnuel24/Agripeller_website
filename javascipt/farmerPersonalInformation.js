
      document.addEventListener("DOMContentLoaded", function () {
        const revealButtons = document.querySelectorAll(".reveal-password");

        revealButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            const input = button.parentElement.querySelector("input");
            if (input.type === "password") {
              input.type = "text";
              button.innerHTML =
                '<iconify-icon icon="mingcute:eye-off-line"></iconify-icon>';
            } else {
              input.type = "password";
              button.innerHTML =
                '<iconify-icon icon="mingcute:eye-line"></iconify-icon>';
            }
          });
        });

        const nextPageButton = document.querySelector(".btn-personal");
        nextPageButton.addEventListener("click", displayDate);

        function displayDate() {
          // Your displayDate function logic
        }
      });
