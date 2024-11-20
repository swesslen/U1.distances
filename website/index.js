// Recommended: All functions declared here

const targetCityName = "Graz";

function createAllCityBoxes() {
    for(let city of cities) {
        const cityBox = document.createElement("div");
        document.querySelector("#cities").appendChild(cityBox);
        cityBox.setAttribute("class", "cityBox");
        cityBox.innerHTML = city.name;
        if (targetCityName === city.name) {
            let h2 = document.querySelector("h2");
            h2.innerHTML =`${city.name} (${city.country})`;
            document.querySelector("title").innerHTML =`${city.name}`;
            cityBox.setAttribute("class", "target");
        }
    }
}

createAllCityBoxes();

let table = document.querySelector("#table");
let blankDiv = document.createElement("div");
table.appendChild(blankDiv);
blankDiv.setAttribute("class", "cell");
blankDiv.innerHTML = ` `

for (let i = 0; i < cities.length; i++) {
    let nrDiv = document.createElement("div");
    nrDiv.setAttribute("class", "cell");
    table.appendChild(nrDiv);
    nrDiv.textContent = i
}

for (let city of cities) {
    
}


// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

