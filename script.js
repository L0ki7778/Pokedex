function renderIcons(arr){
    let pokes = arr.sort((a,b)=>a.id-b.id);
    let pokemon = document.getElementById('poke-icons');
    for(i=0;i<pokes.length; i++)
    pokemon.innerHTML+=/*html*/`
    <div id="poke-id${i}">
        <div class="poke-name">#${pokes[i].id} ${upperCase(pokes,i)}</div>
        <img class="jumping" src="${pokes[i].src}">
    </div>
    `
}

function upperCase(sortedArray, iteration){
const firstLetter = sortedArray[iteration].name.charAt(0);
const largeLetter = firstLetter.toUpperCase();
const remainingLetters = sortedArray[iteration].name.slice(1);
return largeLetter+remainingLetters
}