import config from "../conf/index.js";

// let newFunction = document.createElement("button");
// newFunction.addEventListener("click",(e)=>{
//   (async () => {
//     // POST request using fetch with async/await
//     // const element = document.querySelector('#post-request-async-await .article-id');
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           category: "park",
//           costPerHead: 20,
//           currency: "INR",
//           duration: 4,
//           image: "",
//           name: "park",
//           id: "123456",
//         })
//     };

//     const response = await fetch(`${config.backendEndpoint}/adventures/detail`, requestOptions);
//     const data = await response.json();
//     addAdventureToDOM(data)
//     // element.innerHTML = data.id;
// })();

// })

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
    // alert(err);
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
// function addAdventureToDOM(adventures) {
//   // TODO: MODULE_ADVENTURES
//   // 1. Populate the Adventure Cards and insert those details into the DOM
//   const dataContainer = document.getElementById("data");
//   adventures.forEach((adventure) => {
//     const { id, category, name, image, costPerHead, currency, duration } =
//       adventure;
//     const newContainer = document.createElement("div");
//     newContainer.className = "newContainerImages";
//     newContainer.id = id;
//     newContainer.innerHTML = `<a href=${id}><img src=${image} class="containerImages"/></a>
//     <div style="display: flex;
//         flex-direction: row;
//         gap: 5rem;
//         width: fit-content;">
//     <h6 style="white-space: pre-line">${name}</h6>
//     <h6>${costPerHead}</h6>
//     </div>
//     <div style="display: flex;
//     flex-direction: row;
//     gap: 10rem;
//     width: fit-content;">
//     <h6>${currency}</h6>
//     <h6>${duration}</h6>
//     </div>`;

//     dataContainer.append(newContainer);
//   });
//   // newContainer.style.width = "fit-content !important";
//   // img.style.width = "15rem";
//   // newContainer.style.border = "0.1rem solid gray";
//   // newContainer.style.borderRadius = "0.5rem"

// }
function addAdventureToDOM(adventures) {
  // const dataContainer = document.getElementById("data");
  // adventures.forEach((adventure) => {
  //   const { id, name, image, costPerHead, currency, duration,category } = adventure;
  //   const newContainer = document.createElement("div");
  //   newContainer.className = "newContainerImages";
  //   newContainer.id = id;
  //   console.log(adventure.id)

  //   newContainer.innerHTML = `
  //     <a href="detail/?adventure=${adventures.id}" id="${id}">
  //       <img src="${image}" class="containerImages" alt="${name}"/>
  //     </a>
  //     <div class="adventure-details">
  //       <h6>${name}</h6>
  //       <h6>${costPerHead} ${currency}</h6>
  //       <h6>Duration: ${duration} hrs</h6>
  //     </div>
  //   `;

  //   dataContainer.append(newContainer);
  // });

  for (let i = 0; i < adventures.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "col-12 col-sm-6 col-lg-3 mb-3");
    div.innerHTML = `
      <a id=${adventures[i].id} href="detail/?adventure=${adventures[i].id}">
        <div class="card activity-card">
          <img src=${adventures[i].image}>
            <div class="category-banner">${adventures[i].category}</div>
            <div class="card-body col-md-12 mt-2">
              <div class="d-flex justify-content-between">
                <p>${adventures[i].name}</p>
                <p>₹${adventures[i].costPerHead}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Duration</p>
                <p>${adventures[i].duration} Hours</p>
              </div>
            </div>
        </div>
      </a>`;
    document.getElementById("data").append(div);
  }
}
//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
// Function to filter by duration range (low and high)
function filterByDuration(list, low, high) {
  console.log("filter duration", list);
  let filteredlist=list.filter(function(adv){
    if(high>=adv.duration && low<=adv.duration){
          return true;      
      }
      else{
        return false;
      }   
  });
  console.log("filter duration filteredlist", filteredlist);
  return filteredlist;

}

// Function to filter by category
function filterByCategory(list, categoryList) {
  console.log("filterCategory" , list)
 let filteredlist=list.filter(function(adv){
    if(categoryList.includes(adv.category))
    {
      return true;
    }
    else{
      return false;
    }

  });
  console.log("filtered category gfilter list", filteredlist);
  return filteredlist;
}

// Combined filter function to handle all cases
function filterFunction(list, filters) {
  console.log(list," inside the filter function");
    let filteredlist =[];
    let arr=filters["duration"].split("-");
  
  if(filters["category"].length>0&&filters["duration"].length>0){
  
   filteredlist=filterByCategory(list,filters.category)
   filteredlist=filterByDuration(filteredlist,parseInt(arr[0]),parseInt(arr[1]))
  }else if(filters["category"].length>0){
    filteredlist=filterByCategory(list,filters.category);
  }else if(filters["duration"].length>0){
   filteredlist=filterByDuration(list,parseInt(arr[0]),parseInt(arr[1]))
  }else{ 
    console.log("filterFunction list", list);
    return list;
  }
  console.log("filtered function filter list", filteredlist);
   return filteredlist;
    
  }
//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

<<<<<<< HEAD
  // let savedData = localStorage.setItem("filters",JSON.stringify(filters));
  // getFiltersFromLocalStorage(savedData)
  // return true;
  localStorage.setItem("filters", JSON.stringify(filters));
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
   localStorage.getItem('filters');
   if(filters){
    return JSON.parse(filters);
   }
=======
  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


>>>>>>> fd7af8b4a3181ef2a4513d2bcd7834cac44efcea
  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

<<<<<<< HEAD
  let parentDiv = document.getElementById("category-list");

  parentDiv.innerHTML = "";

  // Generate pills for each category in the filters
  if (filters.category.length > 0) {
    filters.category.forEach((item, index) => {
      // Create a new div for each category pill
      const pill = document.createElement("div");

      // Add unique ID and class for styling
      pill.id = `category-${index}`;
      pill.className = "filter-pill"; // Add a class for styling

      // Set the text content of the pill
      pill.textContent = item;

      // Append the pill to the parent div
      parentDiv.appendChild(pill);
    });
  }
  
=======
>>>>>>> fd7af8b4a3181ef2a4513d2bcd7834cac44efcea
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
