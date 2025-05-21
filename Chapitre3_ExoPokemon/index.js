//TODO Ajouter une rechercher d'index pokemon
// si deja la, highlight background
// si pas la, ajout du pokemon

const poke1 = "https://pokeapi.co/api/v2/pokemon/1";
const poke2 = "https://pokeapi.co/api/v2/pokemon/2";
const poke3 = "https://pokeapi.co/api/v2/pokemon/3";
const pokeArray = [poke1, poke2, poke3];
const refIDpkmn = document.querySelector("#IDpkmn");
const refForm = document.querySelector("#myForm");


refForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let pokeInputConcat = "https://pokeapi.co/api/v2/pokemon/" + refIDpkmn.value;
    fetch(pokeInputConcat)
        .then(res => res.json())
        .then((pkmn) => {

            const newH2 = document.createElement('h2');
            const imgPkmn = document.createElement('img');
            const divCardPkmn = document.createElement('div');

            const allH2 = document.querySelectorAll(".classPokemon h2")

            function refreshStyle() {
                allH2.forEach((element) => {
                    element.style.color = "black", element.style.backgroundColor = "white"
                })
            }

            function createCard() {
                imgPkmn.src = pkmn.sprites.front_default;
                imgPkmn.alt = 'img de pkmn';
                newH2.innerText = pkmn.name;

                divCardPkmn.classList = "classPokemon";
                divCardPkmn.appendChild(newH2);
                divCardPkmn.appendChild(imgPkmn);
                document.body.appendChild(divCardPkmn);
            }

            function highlightPokemon() {
                for (let i = 0; i < allH2.length; i++) {
                    if (allH2[i].innerText === pkmn.name) {
                        console.log(allH2[i]);
                        allH2[i].style.color = "white";
                        allH2[i].style.backgroundColor = "black";
                        return;
                    }
                }
                createCard();
            }

            refreshStyle();
            highlightPokemon();


        })
})


function Pokemon(pkmn) {
    fetch(pkmn)
        .then(res => res.json())
        .then((pkmn) => {
            const newH2 = document.createElement('h2');
            const imgPkmn = document.createElement('img');
            const divCardPkmn = document.createElement('div');

            imgPkmn.src = pkmn.sprites.front_default;
            imgPkmn.alt = 'img de pkmn';
            newH2.innerText = pkmn.name;

            divCardPkmn.classList = "classPokemon";
            divCardPkmn.appendChild(newH2);
            divCardPkmn.appendChild(imgPkmn);
            document.body.appendChild(divCardPkmn);
        })
}

pokeArray.forEach(poke => Pokemon(poke)); // Appel de la fonction 3 fois