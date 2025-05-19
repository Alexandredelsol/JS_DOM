const bearsPictures = [
    "https://placebear.com/500/279",
    "https://placebear.com/500/280",
    "https://placebear.com/500/300",
    "https://placebear.com/500/302",
    "https://placebear.com/500/305",
];

const img = document.querySelectorAll('img');
/*console.log(bearsPictures);
console.log(img)*/
for (let i = 0; i < img.length; i++) {
    img[i].src = bearsPictures[i];
}