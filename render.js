let test;
let names = [];
let image = [];
let pokes = [];


async function getApi(i, limit) {
    let PokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    const response = await fetch(PokeUrl);
    if (response.ok) {
        const data = await response.json()
        let pokemon = {
            id: data.id,
            name: data.name,
            src: data.sprites.front_default
        }
        pokes.push(pokemon)
        if (pokes.length === limit) {
            renderIcons(pokes);
        }
    } else {
        alert("error")
    };
}

// console.log(pokes.sort(({id:a}, {id:b})=>{b-a}))


function firstGeneration() {
    pokes = [];
    clearIcons()
    for (let i = 1; i < 152; i++) {
        getApi(i, 151)
    }
}
function secondGeneration() {
    pokes = [];
    clearIcons()
    for (let i = 152; i < 252; i++) {
        getApi(i, 100)
    }
}
function thirdGeneration() {
    pokes = [];
    clearIcons()
    let limit = 387 - 252;
    for (let i = 252; i < 387; i++) {
        getApi(i,limit)
    }
}
function fourthGeneration() {
    pokes = [];
    clearIcons()
    let limit = 494 - 387;
    for (let i = 387; i < 494; i++) {
        getApi(i, limit)
    }
}
function fifthGeneration() {
    pokes = [];
    clearIcons()
    let limit = 650-494;
    for (let i = 494; i < 650; i++) {
        getApi(i, limit)
    }
}
function sixthGeneration() {
    pokes = [];
    clearIcons()
    let limit = 722 - 650;
    for (let i = 650; i < 722; i++) {
        getApi(i, limit)
    }
}
function seventhGeneration() {
    pokes = [];
    clearIcons()
    let limit = 803 - 722;
    for (let i = 722; i < 803; i++) {
        getApi(i, limit)
    }
}
function eigthGeneration() {
    pokes = [];
    clearIcons()
    let limit = 808 - 803;
    for (let i = 803; i < 808; i++) {
        getApi(i, limit)
    }
}



// Ab der Roten und der Blauen Edition (1–151)
// 2	Ab der Goldenen und Silbernen Edition (152–251)
// 3	Ab der Rubin- und der Saphir-Edition (252–386)
// 4	Ab der Diamant- und Perl-Edition (387–493)
// 5	Ab der Schwarzen und der Weißen Edition (494–649)
// 6	Ab X und Y (650–721)
// 7	Ab Sonne und Mond (722–802)
// 8	Ab Ultrasonne und Ultramond (803–807)
// 9	Ab Pokémon Let’s Go (808–809)
// 10	Ab Schwert und Schild (810–898)
// 11	Ab Pokémon Legenden: Arceus (899–905)
