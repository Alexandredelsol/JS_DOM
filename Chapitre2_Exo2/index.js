allDogsImg = document.querySelectorAll('.img-dog');
console.log(allDogsImg)

for (let i = 0; i < allDogsImg.length; i++) {
    allDogsImg[i].remove();
}