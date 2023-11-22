
let pokeComplete = [];
let pokemon;
let data;
let testPoke;

function catchThemAll(i, limit) {
    let PokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetch(PokeUrl)
    .then(response=>{
        if(!response.ok){
            alert("Error")
            stopPropagation()
        }else{
           return response=response.json()
        }
    })
    .then(json=>{
        data =  json;
        pokemon = {
            id: data.id,
            name: data.name,
            src: data.sprites.front_default
        }
        pokeComplete.push(pokemon)
        if (pokeComplete.length === limit) {
            sortArray(pokeComplete)
           return enableAll()
        }
        
    });
}

function getAll() {
    let limit = 807;
    for (let i = 1; i < 808; i++) {
        catchThemAll(i, limit)
    }
}

//sprites:other:home:front_default--->artwork
//stats: 6 base stats
//species:name ==>name

fetch(`https:pokeapi.co/api/v2/pokemon/144`)
.then(response=>{
    if(!response.ok){
        alert("Error")
        stopPropagation()
    }else{
       return response=response.json()
    }
})
.then(json=>{
    testPoke =  json;
    
});