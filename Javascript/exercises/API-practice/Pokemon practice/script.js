const input = document.getElementById("poke-input");
const fetchButton = document.getElementById("fetch-btn");
const result = document.getElementById("pokemon-result");

fetchButton.addEventListener("click", () => {
    const pokeName = input.value.toLowerCase().trim();
    if (!pokeName) {
        result.innerHTML = `<p>Please enter a Pokémon name.</p>`;
        return;
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
    .then(res => res.json())
    .then( data => {
        const name = data.name;
        const types = data.types[0].type.name;
        const img = data.sprites.front_default;
        const height = data.height;
        const abilities = data.abilities.map(ability => ability.ability.name).join(", ");
        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join("<br>");
        result.innerHTML = `
        <h1>${name}</h1>
        <img src="${img}" />
        <p>Type: ${types}</p>
        <p>Height: ${height}m/</p>
        <p>Abilities: ${abilities}</p>
        <p>Stats: ${stats}</p>
        `
    })
    .catch(error => {
        console.log("Error fetching Pokémon:", error); 
        result.innerHTML =`<p>Pokemon not found. Try another name!</p>`
    })
    console.log(`Fetching URL: https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    console.log(pokeName);
});

