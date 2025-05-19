const card2 = document.querySelector(".second-card");
const imgCat = document.createElement("img");
imgCat.src = "https://placecats.com/408/287";
imgCat.alt = "Ceci est un chat";
console.log(imgCat);
console.log(card2);
card2.appendChild(imgCat);