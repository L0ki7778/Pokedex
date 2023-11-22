function renderIcons(arr) {
    let pokes = arr.sort((a, b) => a.id - b.id);
    let pokemon = document.getElementById('poke-icons');
    for (i = 0; i < pokes.length; i++)
        pokemon.innerHTML +=/*html*/`
    <div class="pokemon-dexview" id="poke-id${i}">
        <div class="poke-name">#${pokes[i].id} ${upperCase(pokes, i)}</div>
        <img class="jumping" src="${pokes[i].src}">
    </div>
    `
}

function upperCase(sortedArray, iteration) {
    const firstLetter = sortedArray[iteration].name.charAt(0);
    const largeLetter = firstLetter.toUpperCase();
    const remainingLetters = sortedArray[iteration].name.slice(1);
    return largeLetter + remainingLetters
}

function clearIcons() {
    document.getElementById('poke-icons').innerHTML = '';
}


function sortArray(arr) {
    pokeComplete = arr.sort((a, b) => a.id - b.id);
}

function enableAll() {
    document.getElementById('all-generations').disabled = false;

}

function renderAll() {
    let pokemon = document.getElementById('poke-icons');
    pokemon.innerHTML = "";
    renderHundred(0);
}

function renderHundred(x) {
    let pokemon = document.getElementById('poke-icons');
    if (x < 800) {
        if (x === 0) { i = 0 } else { i = x + 1 };
        let sum = x + 50;
        for (i; i <= sum; i++) {
            pokemon.innerHTML +=/*html*/`
            <div class="pokemon-dexview" id="poke-id${i}">
                <div class="poke-name">#${pokeComplete[i].id} ${upperCase(pokeComplete, i)}</div>
                <img class="jumping" src="${pokeComplete[i].src}">
            </div>
            `
        };
        return setTimeout(() => { renderHundred(x + 50) }, 200)
    } else {
        return  renderLastBatch()
    }
}

function renderLastBatch() {
    let pokemon = document.getElementById('poke-icons');
    for (let i = 800; i < pokeComplete.length; i++) {
        pokemon.innerHTML +=/*html*/`
        <div class="pokemon-dexview" id="poke-id${i}">
            <div class="poke-name">#${pokeComplete[i].id} ${upperCase(pokeComplete, i)}</div>
            <img class="jumping" src="${pokeComplete[i].src}">
        </div>
        `
    }
}