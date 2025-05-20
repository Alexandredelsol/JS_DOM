const dropDownMenu = document.querySelector(".dropdown-menu-content");
const dropDownButton = document.querySelector(".dropdown-btn");

dropDownButton.addEventListener("click", function (event) {
    dropDownMenu.classList.toggle("visible");
})