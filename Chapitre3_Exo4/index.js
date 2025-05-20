const body = document.querySelector("body")
const pRef = document.querySelector(".title-cursor-position")
pRef.style.height = "900px";
pRef.style.width = "100%";
document.body.addEventListener("mousemove", function (e) {
    pRef.innerHTML =  `Client X/Y: ${e.clientX}, ${e.clientY}`;
});
