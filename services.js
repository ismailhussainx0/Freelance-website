// input field
let searchInput = document.querySelector("#searchInput");

// card
let servicesCard = document.querySelectorAll(".service-card")

searchInput.addEventListener("input", function () {

     // search value to lower case
     let searchValue = searchInput.value.toLowerCase();

     servicesCard.forEach(function (item) {
          let cardTitle = item.querySelector(".service-title").innerText.toLowerCase();

          if (cardTitle.includes(searchValue)) {
               item.parentElement.style.display = "";
          } else {
               item.parentElement.style.display = "none";
          }

     })

})



// Search Filter
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {


     btn.addEventListener("click", function () {

          // button colors change
          buttons.forEach(function (button) {
               button.classList.remove("primary-btn");
               button.classList.add("secondary-btn");
          })

          btn.classList.remove("secondary-btn");
          btn.classList.add("primary-btn");



          // btn data category
          let selectedValue = btn.dataset.category

          // card loop
          servicesCard.forEach(function (card) {
               let value = card.dataset.category;

               if (selectedValue === value || selectedValue === "all") {
                    card.parentElement.style.display = "";
               } else {
                    card.parentElement.style.display = "none"
               }
          })

     })

})

