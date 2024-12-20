import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
<<<<<<< HEAD
console.log(cities)
=======

>>>>>>> 13ea157302ae48d1eb3fd466abcd5e8c0fde7d8a
  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
<<<<<<< HEAD
  console.log(config.backendEndpoint + "/cities");
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let fetchData = await fetch(config.backendEndpoint + "/cities");
    let newData = await fetchData.json();
    console.log(newData);
    return newData
  } catch (err) {
    alert(err);
    return null
  }

  // return newData;
}

// let rowId = document.getElementById("data");
// console.log(rowId);
//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  let rowId = document.getElementById("data");

  if (!rowId) {
    console.error("Element with id 'data' not found.");
    return;
  }
  let createCol = document.createElement("div");
  console.log(createCol);
  rowId.append(createCol);
  createCol.classList.add("col");
  createCol.style.height = "18rem";

  let anchorTag = document.createElement("a");
  anchorTag.setAttribute("id", id);
  anchorTag.setAttribute("href", `pages/adventures/?city=${id}`);
  createCol.append(anchorTag);

  let img = document.createElement("img");
  img.setAttribute("id", id);
  img.src = image;
  img.style.width = "15rem";
  img.style.height = "20rem";
  img.classList.add("rounded");
  anchorTag.append(img);

  let nestedCol = document.createElement("div");
  nestedCol.classList.add("placeInfo");
  nestedCol.innerHTML = "<h5></h5><p></p>";
  createCol.append(nestedCol);
  // Select the newly created elements directly
  let h5 = nestedCol.querySelector("h5");
  let p = nestedCol.querySelector("p");

  // Update their content
  h5.innerText = city;
  p.innerText = description;
  // <div class="d-flex flex-column justify-content-center align-items-center tile-text text-center">
  //           <h5 class="card-title text-white">Bengaluru</h5>
  //           <p class="card-text text-white">100+ PLACES</p>
  //         </div>
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
=======
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

>>>>>>> 13ea157302ae48d1eb3fd466abcd5e8c0fde7d8a
}

export { init, fetchCities, addCityToDOM };
