const input = document.getElementById("cardName");
const button = document.getElementById("searchBtn");
const cardDisplay = document.getElementById("cardInfo");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", toggleTheme);


button.addEventListener("click", () => {
    const cardName = input.value.toLowerCase().trim();
    if (!cardName) {
        result.innerHTML = `<p>Card not Found</p>`;
        return;
    }
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`)
    .then(res => res.json())
    .then( data => {
        const card = data.data[0];
        let cardType = card.type;
        let badgeText = "";
        let badgeClass = "";
        if (cardType.includes("Spell")) {
           badgeText = "🧙 Spell";
           badgeClass = "badge-spell";
        } else if (cardType.includes("Trap")) {
            badgeText = "💣 Trap";
            badgeClass = "badge-trap";
        } else {
            badgeText = "👹 Monster";
            badgeClass = "badge-monster"
        }
        const name = card.name;
        const type = card.type;
        const img = card.card_images[0].image_url;
        const desc = card.desc;
        const race = card.race;
        const atk = card.atk !== undefined ? `Atk ${card.atk}` : "";
        const def = card.def !== undefined ? `Def ${card.def}` : "";
        const level = card.level !== undefined ? `Level ${card.level}` : "";
        cardDisplay.innerHTML = `
        <h1>${name}</h1>
        <p class="badge ${badgeClass}">${badgeText}</p>
        <p>${level}</p>
        <img src="${img}" alt="${name}"/>
        <p>Type: ${race}/${type}</p>
        <p>Atk: ${atk} / Def: ${def}</p>
        <p>${desc}</p>
        `
    })
    .catch( error => {
        console.log("Error fetching card: ", error);
        cardDisplay.innerHTML = `<p>Card not found. Check Spelling or Try another name!</p>`
    })
    console.log(`Fetching URL: https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`);
    console.log(cardName);
})

function toggleTheme() {
    document.body.classList.toggle("dark", themeToggle.checked);
    console.log("This is toggleTheme being called");
}