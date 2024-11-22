// Recommended: All functions declared here

const targetCityName = "Graz";

function createAllCityBoxes() {
    for (let city of cities) {
        const cityBox = document.createElement("div");
        document.querySelector("#cities").appendChild(cityBox);
        cityBox.setAttribute("class", "cityBox");
        cityBox.innerHTML = city.name;
        /* if (targetCityName === city.name) {
            let h2 = document.querySelector("h2");
            h2.innerHTML =`${city.name} (${city.country})`;
            document.querySelector("title").innerHTML =`${city.name}`;
            cityBox.setAttribute("class", "target cityBox");
        } */
    }
}

createAllCityBoxes();


function markCityBox(cityObject, target) {

}

markCityBox()



/*




function findClosestFurthest (distances) {
    const result = {
        furthest: distances.distance,
        closest: distances.distance
    }

    for (let distance of distances) {
        if (distance.distance > result.furthest) {
            result.furthest = distance.distance
        }
        if (distance.distance < result.closest) {
            result.closest = distance.distance
        }
    }
}
*/

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

function createTable () {
    const table = document.querySelector("#table");
    
    const rows = cities.length;
    const columns = cities.length + 1;

    for (let a = 0; a < columns; a++) {
        const blankCell = document.createElement("div");
        blankCell.setAttribute("class", "cell head_column");

        if (a === 0) {
            blankCell.textContent = "";
        } else {
            blankCell.textContent = cities[a - 1].id;
        }

        table.appendChild(blankCell);
    }

    for (let i = 0; i < rows; i++) {
        let namesRow = document.createElement("div");
        namesRow.innerHTML = `${cities[i].id}-${cities[i].name}`
        namesRow.setAttribute("class", "cell head_row");

        if ((i + 1) % 2 === 0) {
            namesRow.setAttribute("class", "even_row")
        }
        table.appendChild(namesRow);

        for (let j = 0; j < cities.length; j++) {
            
        }
    }
}

/*
let distanceValue = null;
for (let distance of distances) {
    create
    if (
        distance.city1 === city.id &&
        distance.city2 === city.id
    ) {
        distanceValue = distance.distance;
        break;
    }
    if (distance.city2 === city.id && distance.city1 === city.id) {
        distanceValue = distance.distance
    }
}
*/
// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

