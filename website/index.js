// Recommended: All functions declared here
const targetCityName = "Graz";


function createAllCityBoxes() {
    for(let city of cities) {
        const cityBox = document.createElement("div");
        document.querySelector("#cities").appendChild(cityBox);
        cityBox.setAttribute("class", "cityBox");
        cityBox.innerHTML = city.name;
        if (targetCityName == city.name) {
            cityBox.setAttribute("class", "target")
            document.querySelector("h2").innerHTML = `${city.name} (${city.country})`;
            document.querySelector("title").innerHTML = `${city.name}`;
        }
    }
}

createAllCityBoxes();

function markCityBox(cityObject, kindOfCity) {
    
}



// Recommended: constants with references to existing HTML-elements



// Recommended: Ask for the city name and then the rest of the code

