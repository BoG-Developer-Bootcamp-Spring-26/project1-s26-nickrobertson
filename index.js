let counter = 1;
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

function incrementCounter() {
    if (counter < 1302) {
        counter++;
        fetchPokemonData(counter);
    }
}

function decrementCounter() {
    if (counter > 1) {
        counter--;
        fetchPokemonData(counter);
    }
}

leftButton.addEventListener('click', () => {
    decrementCounter();
});

rightButton.addEventListener('click', () => {
    incrementCounter();
});

async function fetchPokemonData(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        updateImage(data.sprites.front_default);
    } catch (err) {
        console.error(err);
    }
}

function updateImage(img) {
    const imageElement = document.getElementById('pokemon-image');
    imageElement.src = img;
}