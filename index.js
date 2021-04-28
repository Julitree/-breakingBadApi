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
                <div class="imgContainer">
                    <img src=${character.img}>
                </div>
                <div class="infoContainer">
                    <h2>${character.name}</h2>
                    <p>Nickname: <span>${character.nickname}</span></p>
                    <p>Occupation: <span>${character.occupation}</span></p>
                    <p>Status: <span>${character.status}</span></p>
                </div>`;

            gridContainer.appendChild(cardContainer)

            console.log(character.name);
        });

    });