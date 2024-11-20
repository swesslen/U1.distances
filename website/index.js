// Recommended: All functions declared here
let cityName = prompt("Skriv en Europeisk stad tack!")


function createAllCityBoxes() {
    for(let city of cities) {
        const cityBox = document.createElement("div");
        document.querySelector("#cities").appendChild(cityBox);
        cityBox.setAttribute("class", "cityBox")
        cityBox.innerHTML = city.name;
    }
    
}

let h2 = document.querySelector("h2");

function markCityBox(cityObject, kindOfCity) {
    for (let city of cities) {
        if (cityName == city.name) {
            h2.innerHTML = `${city.name}(${city.country})`
            
        }
    }
}

// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

