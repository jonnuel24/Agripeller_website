(async () => {
        const response = await fetch(
          "https://restcountries.eu/rest/v2/all?fields=alpha2Code;name"
        );
        const countries = await response.json();
        const select = document.getElementById("country");
        for (const country of countries) {
          const option = document.createElement("option");
          option.value = country.alpha2Code;
          option.innerText = country.name;
          select.appendChild(option);
        }
      })();

      document.addEventListener("DOMContentLoaded", function () {
        const daySelect = document.getElementById("day");
        const yearSelect = document.getElementById("year");
        // const countrySelect = document.getElementById("country");

        // const countryList = countries.all;
        // for (const countryCode in countryList) {
        //   if (countryList.hasOwnProperty(countryCode)) {
        //     const countryName = countryList[countryCode];
        //     const option = document.createElement("option");
        //     option.value = countryCode;
        //     option.textContent = countryName;
        //     countrySelect.appendChild(option);
        //   }
        // }

        for (let i = 1; i <= 31; i++) {
          const option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          daySelect.appendChild(option);
        }

        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1900; i--) {
          const option = document.createElement("option");
          option.value = i;
          option.textContent = i;
          yearSelect.appendChild(option);
        }

        const nextPageButton = document.querySelector(".btn-personal");
        nextPageButton.addEventListener("click", displayDate);

        function displayDate() {
          const month = document.getElementById("month").value;
          const day = document.getElementById("day").value;
          const year = document.getElementById("year").value;

          const selectedDate = `${month}/${day}/${year}`;
          console.log(`Selected Date: ${selectedDate}`);
        }
      });
