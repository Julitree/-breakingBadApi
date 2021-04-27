let x = {}

fetch('https://breakingbadapi.com/api/characters')
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        const gridContainer = document.getElementById("gridContainer");
        myJson.map(character => {
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("cardContainer");
            cardContainer.innerHTML = `
                <div class="imgContainer"><img src=${character.img}></div>
                <div class="infoContainer">
                    <h2>${character.name}</h2>
                    <p>Nickname: <span>${character.nickname}</span></p>
                    <p>Occupation: <span>${character.occupation}</span></p>
                    <p>Status: <span>${character.status}</span></p>
                </div>`;

            gridContainer.appendChild(cardContainer)
                // let cardContainer = document.createElement("div");

            // let imgContainer = document.createElement("div");
            // let imgCharacter = document.createElement("IMG");

            // let InfoContainer = document.createElement("div");
            // let nameCharacter = document.createElement("h2");
            // let nickname = document.createElement("p");
            // let occupation = document.createElement("p");
            // let breakingBadSeasons = document.createElement("p");
            // let status = document.createElement("p");


            console.log(character.name);
        });

    });