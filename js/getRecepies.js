const search = document.querySelector("#search");
const searchIcon = document.querySelector("#search-icon");

search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchRecepie(search.value);
    }
});

searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchRecepie(search.value);
});

async function searchRecepie(parameter) {
    const APP_ID = "d35afcf5";
    const APP_KEY = "7e5bfaaf8c3c99e30481adec9d33d32a";
    const res = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${parameter}`
    );
    const json = await res.json();
    writeContent(json);
}

function writeContent(json) {
    const container = document.querySelector(".recepies__container");
    container.innerHTML = "";
    for (let i = 0; i < json.hits.length; i++) {
        container.innerHTML += `
        <div class="box">
            <div class="img-container">
                <img src="${json.hits[i].recipe.image}" alt="">
            </div>
        <div class="text">
                <h2>${json.hits[i].recipe.label}</h2>
                <p class="label">Ingredients</p>
                <ol class="ingredients" id=ingredient-${i}>
                </ol>
            </div>
        </div>
        `;
        json.hits[i].recipe.ingredientLines.forEach((element) => {
            li = document.querySelector(`#ingredient-${i}`);
            li.innerHTML += `<li>${element}</li>`;
        });
    }
}
