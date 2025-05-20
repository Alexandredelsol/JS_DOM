const img = document.querySelector("img");
const title = document.querySelector(".title");
img.addEventListener("click", () => {
    img.src = "https://placecats.com/200/287";
    img.alt = "Ceci est un chat"
})
title.addEventListener("mouseover", () => {
    title.style.color = "red";
})
title.addEventListener("mouseleave", () => {
    title.style.color = "black";
})