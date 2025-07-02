console.log("I created the perfect system");

const postList = document.getElementById("post-list");

const loadBtn = document.getElementById('loadBtn').addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then( data => {
    const firstFive = data.slice(0, 3);
     postList.innerHTML = "";
      firstFive.forEach(post => {
        const li = document.createElement("li");
        const title = document.createElement("h1");
        title.textContent = post.title;
        const body = document.createElement("p");
        body.textContent = post.body;
        li.appendChild(title);
        li.appendChild(body);
        postList.appendChild(li);
    });
    });
});

// SWAPI async practice



async function getCharacterData(name) {
    try {
    const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await res.json();
    const character = data.results[0]; // always check if it exists!
    if (!character) return null; //handle no results
    const homeworldRes = await fetch(character.homeworld);
    const homeworldData = await homeworldRes.json();
    
    return {
        ...character,
        homeworld: homeworldData.name
    };    
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};