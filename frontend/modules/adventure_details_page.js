import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  console.log(search);
  if(search){
    let params = new URLSearchParams(search);
    let advenId = params.get("adventure");

    return advenId;
  }

  // Place holder for functionality to work in the Stubs
  return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  if (!adventureId) {
    console.error("Invalid or missing adventure ID");
    return null;
  }

  let url = `${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`;
  console.log("API URL:", url);

  try {
    let fetchData = await fetch(url);
    if (!fetchData.ok) {
      throw new Error(`HTTP error! Status: ${fetchData.status}`);
    }

    let newData = await fetchData.json();
    console.log("Fetched Adventure Details:", newData);
    return newData;
  } catch (err) {
    console.error("Error fetching adventure details:", err.message);
    return null;
  }
  // Place holder for functionality to work in the Stubs 
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // Add adventure name and subtitle to the DOM
  let heading = document.getElementById("adventure-name");
  let para = document.getElementById("adventure-subtitle");
  heading.innerText = adventure.name;
  para.innerText = adventure.subtitle;

  // Get the photo gallery container
  let images = document.getElementById("photo-gallery");

  // Clear previous images if any
  images.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators"></ol>
      <div class="carousel-inner"></div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        
      </a>
    </div>`;

  // Select dynamically created elements
  let indicators = images.querySelector(".carousel-indicators");
  let innerCarousel = images.querySelector(".carousel-inner");

  // Loop through imagesArray to populate the carousel
  adventure.images.forEach((ele, index) => {
    // Create a carousel item
    let carouselElement = document.createElement("div");
    carouselElement.classList.add("carousel-item");
    if (index === 0) carouselElement.classList.add("active"); // Add active class for the first item

    // Create an image element
    let img = document.createElement("img");
    img.src = ele; // Assuming 'ele' is the URL of the image
    img.classList.add("d-block", "w-100" ,"activity-card-image");

    // Append the image to the carousel item
    carouselElement.appendChild(img);
    innerCarousel.appendChild(carouselElement); // Append the carousel item to the carousel-inner

    // Create an indicator for each image
    let indicator = document.createElement("li");
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-bs-slide-to", index.toString());
    if (index === 0) indicator.classList.add("active"); // Add active class for the first indicator

    indicators.appendChild(indicator); // Append the indicator
  });

  // Add adventure content to the DOM
  let content = document.getElementById("adventure-content");
  content.innerText = adventure.content;
}


//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
