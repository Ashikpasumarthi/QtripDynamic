import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  const urlParams = new URLSearchParams(search);
  const city = urlParams.get("city");
  console.log(city);
  return city;
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  const adventures = "adventures";
  console.log(config.backendEndpoint);
  try {
    let adventuresData = await fetch(
      `${config.backendEndpoint}/${adventures}?city=${encodeURIComponent(city)}`
    );
    let newAdventureData = await adventuresData.json();
    console.log(newAdventureData);
    return newAdventureData;
  } catch (err) {
    alert(err);
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  const dataContainer = document.getElementById("data");
  adventures.forEach((adventure) => {
    const { id, category, name, image, costPerHead, currency, duration } =
      adventure;
    const newContainer = document.createElement("div");
    newContainer.className = "newContainerImages";
    newContainer.id = id;
    newContainer.innerHTML = `<img src=${image} class="containerImages"/>
    <div style="display: flex; 
        flex-direction: row;
        gap: 5rem;
        width: fit-content;">
    <h6 style="white-space: pre-line">${name}</h6>
    <h6>${costPerHead}</h6>
    </div>
    <div style="display: flex;
    flex-direction: row;
    gap: 10rem;
    width: fit-content;">
    <h6>${currency}</h6>
    <h6>${duration}</h6>
    </div>`;

    dataContainer.append(newContainer);
  });
  // newContainer.style.width = "fit-content !important";
  img.style.width = "15rem";
  newContainer.style.border = "0.1rem solid gray";
  newContainer.style.borderRadius = "0.5rem"
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object

  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
