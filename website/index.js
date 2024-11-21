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
            cityBox.setAttribute("class", "target cityBox");
        }
    }
}

createAllCityBoxes();


function markAllCityBoxes (cityObject, kindOfCity) {

}

markAllCityBoxes()



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




/*
for (let city of cities) {
    let cityCell = document.createElement("div");
    table.appendChild(cityCell);
    cityCell.setAttribute("class", "cell")
    cityCell.innerHTML = `${city.name}`;
    for (let distance of distances) {
        if (city.id == distance.city1) {
            let distanceDiv = document.createElement("div");
            table.appendChild(distanceDiv);
            distanceDiv.setAttribute("class", "cell");
        } else if (city.id == distance.city2) {

        }
    }
}
*/

// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

