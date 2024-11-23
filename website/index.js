// Recommended: All functions declared here

const targetCityName = "Graz";



function getTargetCityObject (cityName) {
    for (let city of cities) {
        if (cityName === city.name) {
            return city;
        }
    }
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${cityName} finns inte i databasen`;
    document.querySelector("title").innerHTML = `Not found`
    return null;
}

let targetCityObject = getTargetCityObject(targetCityName)

function findClosestFurthest (targetCityObject) {
    if (targetCityObject === null) {
        return null
    }    
    let targetID = targetCityObject.id;

    let closestCityID = null;
    let closestValue = 1000000;

    let furthestCityID = null;
    let furthestValue = 0;

    for (let distance of distances) {
        if (targetID === distance.city1 || targetID === distance.city2) {
            if (distance.distance < closestValue) {
                if (targetID === distance.city1) {
                    closestCityID = distance.city2;
                    closestValue = distance.distance;
                } else {
                    closestCityID = distance.city2;
                    closestValue = distance.distance;
                }
            } 
            if (distance.distance > furthestValue) {
                if (targetID === distance.city1) {
                    furthestCityID = distance.city2;
                    furthestValue = distance.distance;
                } else {
                    furthestCityID = distance.city1;
                    furthestValue = distance.distance;
                }
            }
        }
    }
    return [closestCityID, closestValue, furthestCityID, furthestValue]
}

let closestFurthest = findClosestFurthest(targetCityObject)

function createAllCityBoxes(cityName) {
    for (let city of cities) {
        const cityBox = document.createElement("div");
        document.querySelector("#cities").appendChild(cityBox);
        cityBox.setAttribute("class", "cityBox");
        cityBox.innerHTML = city.name;
        if (closestFurthest === null) {
            continue;
        }
        if (cityName === city.name) {}
    }
}

createAllCityBoxes(targetCityName);

function createTable() {
    const table = document.querySelector("#table");
    table.style.width = "100%"

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
        namesRow.setAttribute("class", "head_row cell");

        if ((i + 1) % 2 === 0) {
            namesRow.setAttribute("class", "cell head_row even_row")
        }
        table.appendChild(namesRow);

        for (let j = 0; j < cities.length; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            

            let distanceValue = null;
            for (let distance of distances) {
                if (
                    distance.city1 === cities[i].id &&
                    distance.city2 === cities[j].id
                ) {
                    distanceValue = distance.distance;
                    break;
                }
                if (distance.city2 === cities[i].id && distance.city1 === cities[j].id) {
                    distanceValue = distance.distance
                }
            }

            if (distanceValue !== null) {
                cell.innerHTML = `${distanceValue / 10}`;
            }

            if (j % 2 === 0) {
                cell.style.backgroundColor = "BurlyWood"
            }
            if ((i + 1) % 2 === 0) {
                cell.setAttribute("class", "cell even_row")
            }

            table.appendChild(cell);
        }
    }
}
createTable();


// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

