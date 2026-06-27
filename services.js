// input field
let searchInput = document.querySelector("#searchInput");

// card
let servicesCard = document.querySelectorAll(".service-card")

searchInput.addEventListener("input", function(){

    let searchValue = searchInput.value.toLowerCase();

    servicesCard.forEach(function(item){
       let cardTitle =  item.querySelector(".service-title").innerText.toLowerCase();

       if(cardTitle.includes(searchValue)){
            item.parentElement.style.display = "";  
       }else{
            item.parentElement.style.display = "none";
       }

    })



})