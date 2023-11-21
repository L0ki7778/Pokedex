let test;
let names = [];
let image = [];
let pokes = []

async function getApi(i){
    let PokeUrl=`https://pokeapi.co/api/v2/pokemon/${i}`
    const response = await fetch(PokeUrl);
    if(response.ok){
        const data =await response.json()
        let pokemon = {
            id: data.id,
            name:data.name,
            src : data.sprites.front_default
        }
        pokes.push(pokemon)
        if(pokes.length===151){           
                renderIcons(pokes);
        }
    }else{
        alert("error")
    };
}

// console.log(pokes.sort(({id:a}, {id:b})=>{b-a}))


firstGeneration()


function firstGeneration(){
    for(let i = 1; i<152 ;i++){
        getApi(i)
    }
}
function secondGeneration(){
    for(let i = 152; i<252 ;i++){
        getApi(i)
    }
}
function thirdGeneration(){
    for(let i = 252; i<387 ;i++){
        getApi(i)
    }
}
function fourthGeneration(){
    for(let i = 387; i<494 ;i++){
        getApi(i)
    }
}
function sixthGeneration(){
    for(let i = 494; i<650 ;i++){
        getApi(i)
    }
}
function seventhGeneration(){
    for(let i = 650; i<722 ;i++){
        getApi(i)
    }
}
function eigthGeneration(){
    for(let i = 722; i<803 ;i++){
        getApi(i)
    }
}
function ninthGeneration(){
    for(let i = 803; i<808 ;i++){
        if(i === 807){
            return   getApi(i)
        }
         getApi(i)
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
