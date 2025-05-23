const arrayWords = ["droles", "devier", "enjeux", "geckos", "aurore", "cercle"];
//const arrayWords = ["oui","mie","blé","lys"]
//"
let currentPlayWord = ""
let arrayLetters = []

const randomButtonRef = document.querySelector("#randomButton");
const winResetRandom = document.querySelector("#winResetRandom");

function buttonRandom(buttonRandom) {
    buttonRandom.addEventListener("click", function () {

        getRandomWords(arrayWords);
        restTheGame();

    })

}

buttonRandom(randomButtonRef);
buttonRandom(winResetRandom);


function getRandomWords(arrayWords) {
    const gameDisplayH2Ref = document.getElementById("gameDisplayH2");


    let i = Math.floor(Math.random() * arrayWords.length);
    currentPlayWord = arrayWords[i];
    arrayLetters = currentPlayWord.split("");
    arrayLetters.sort(() => 0.5 - Math.random());
    let arrayMixed = arrayLetters.join("")

    console.log(currentPlayWord);
    console.log(arrayMixed);
    gameDisplayH2Ref.innerText = arrayMixed;


}

const refInput = document.querySelectorAll("input");
let nbOfMistakes = 0;
const mistakesArray = [];
let result = "";
let life = 0;

function putFocusOnNextInput() {
    for (let i = 0; i < refInput.length; i++) {
        refInput[i].addEventListener("input", (e) => {
            const nbTriesRef = document.getElementById("nbTries");
            const mistakesLettersRef = document.getElementById("mistakesLetters");
            const lifePointRef = document.querySelectorAll(".lifePoint")

            if (e.target.value !== currentPlayWord[i]) {
                nbOfMistakes++;
                if (nbOfMistakes >= 6) {
                    restTheGame();
                }
                lifePointRef[life].style.backgroundColor = "purple";
                life++;

                console.log(nbOfMistakes)

                nbTriesRef.innerText = nbOfMistakes.toString();
                mistakesArray.push(e.target.value)
                mistakesLettersRef.innerText = mistakesArray;
                console.log(mistakesArray);
            }

            if (refInput[i].value.length === 1 && i < refInput.length - 1) {
                refInput[i].nextElementSibling.focus();
            }

            result += e.target.value;
            winningDisplay(result);
        })

    }

}

const restButtonRef = document.querySelector("#resetButton");


function restTheGame() {
    const nbTriesRef = document.getElementById("nbTries");
    const mistakesLettersRef = document.getElementById("mistakesLetters");
    const lifePointRef = document.querySelectorAll(".lifePoint")
    nbOfMistakes = 0;
    mistakesArray.length = 0;
    mistakesLettersRef.innerText = [];
    result = "";
    nbTriesRef.innerText = "0";
    life = 0;
    for (let j = 0; j < lifePointRef.length; j++) {
        lifePointRef[j].style.backgroundColor = "gray";
    }
    for (let i = 0; i < refInput.length; i++) {
        refInput[i].value = "";
    }
    refInput[0].focus();
}

restButtonRef.addEventListener("click", (e) => {
    restTheGame();
})

function winningDisplay(result) {
    const winDialogRef = document.getElementById("winDialog");
    const winWordRef = document.getElementById("winWord");
    if (currentPlayWord === result) {
        winWordRef.innerText = currentPlayWord;
        winDialogRef.showModal();
    }
}


getRandomWords(arrayWords);
putFocusOnNextInput();