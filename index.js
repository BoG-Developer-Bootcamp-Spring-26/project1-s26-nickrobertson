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
        updateName(data.name);
        updateTypes(data.types);
        updateStats(data.height, data.weight, data.stats);
    } catch (err) {
        console.error(err);
    }
}

function updateImage(img) {
    const imageElement = document.getElementById('pokemon-image');
    imageElement.src = img;
}

function updateName(name) {
    const nameElement = document.getElementById('pokemon-name');
    nameElement.textContent = name;
}

function updateTypes(types) {
    const typesContainer = document.getElementById('types-container');
    typesContainer.innerHTML = '';
    for (let i = 0; i < types.length; i++) {
        const typeElement = document.createElement('p');
        typeElement.classList.add('type');
        typeElement.textContent = types[i].type.name;
        typeElement.style.backgroundColor = setTypesColor(types[i].type.name);
        typesContainer.appendChild(typeElement);
    }
}

function updateStats(height, weight, stats) {
    const statsContainer = document.getElementById('pokemon-stats');
    statsContainer.innerHTML = '';

    const heightElement = document.createElement('p');
    heightElement.classList.add('height');
    heightElement.textContent = `height: ${height / 10}m`;
    statsContainer.appendChild(heightElement);

    const weightElement = document.createElement('p');
    weightElement.classList.add('weight');
    weightElement.textContent = `weight: ${stats[0].base_stat / 10}kg`;
    statsContainer.appendChild(weightElement);

    for (let i = 0; i < stats.length; i++) {
        const statElement = document.createElement('p');
        statElement.classList.add('stat');
        statElement.textContent = `${stats[i].stat.name}: ${stats[i].base_stat}`;
        statsContainer.appendChild(statElement);
    }
    
}

function setTypesColor(typeName) {
    if (typeName === 'normal') {
        return '#A8A77A';
    } else if (typeName === 'fire') {
        return '#EE8130';
    } else if (typeName === 'water') {
        return '#6390F0';
    } else if (typeName === 'electric') {
        return '#F7D02C';
    } else if (typeName === 'grass') {
        return '#7AC74C';
    } else if (typeName === 'ice') {
        return '#96D9D6';
    } else if (typeName === 'fighting') {
        return '#C22E28';
    } else if (typeName === 'poison') {
        return '#A33EA1';
    } else if (typeName === 'ground') {
        return '#E2BF65';
    } else if (typeName === 'flying') {
        return '#A98FF3';
    } else if (typeName === 'psychic') {
        return '#F95587';
    } else if (typeName === 'bug') {
        return '#A8B820';
    } else if (typeName === 'rock') {
        return '#B6B67C';
    } else if (typeName === 'ghost') {
        return '#7B68EE';
    } else if (typeName === 'dragon') {
        return '#7037FF';
    } else if (typeName === 'dark') {
        return '#705746';
    } else if (typeName === 'steel') {
        return '#B7B7CE';
    } else if (typeName === 'fairy') {
        return '#D685A3';
    }
}