const input = document.getElementById('characterName')
const button = document.getElementById('searchBtn');
const output = document.getElementById('characterInfo');

button.addEventListener("click", async () => {
    try {
        const characterName = input.value.toLowerCase().trim();
        if (!characterName) {
            results.innerHTML = `<p>Could Not Find Target</p>`;
            return;
        }

        const response = await fetch(`https://swapi.dev/api/people/?search=${encodeURIComponent(characterName)}`);
        const data = await response.json();

        if (data.results.length === 0) {
            results.innerHTML = `<p>Target Not Found. Check Spelling or Try Another Name!</p>`;
            return;
        }

        const character = data.results[0];
        const homeworldUrl = character.homeworld;
        const name = character.name;
        const height = character.height;
        const birthYear = character.birth_year;
        const gender = character.gender;

        output.innerHTML = `
            <h1>${name}, ${gender}</h1>
            <p>Height: ${height} cm</p>
            <p>Birth Year: ${birthYear}</p>
        `;

        const homeworldResponse = await fetch(homeworldUrl);
        const worldData = await homeworldResponse.json();
        const homeName = worldData.name;

        output.innerHTML += `<p>Homeworld: ${homeName}</p>`;
    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerHTML = `<p>Target Not Found. Check Spelling or Try Another Name!</p>`;
    }
});
