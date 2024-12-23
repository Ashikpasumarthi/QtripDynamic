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
    console.log("Error fetching adventure details:", err.message);
    return null;
  }
  // Place holder for functionality to work in the Stubs 
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // Add adventure name and subtitle to the DOM
  let heading = document.getElementById("adventure-name");
  let para = document.getElementById("adventure-subtitle");
  heading.textContent = adventure.name;
  para.textContent = adventure.subtitle;

  // Call the function to add the Bootstrap gallery
  addBootstrapPhotoGallery(adventure.images);

  // Add adventure content to the DOM
  let content = document.getElementById("adventure-content");
  content.textContent = adventure.content;
}

// Implementation of Bootstrap gallery component
function addBootstrapPhotoGallery(imagesArray) {
  // Get the photo gallery container
  let imagesContainer = document.getElementById("photo-gallery");

  // Clear previous content
  imagesContainer.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators"></div>
      <div class="carousel-inner"></div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
       
      </a>
    </div>`;

  // Select dynamically created elements
  let indicators = imagesContainer.querySelector(".carousel-indicators");
  let innerCarousel = imagesContainer.querySelector(".carousel-inner");

  // Populate the carousel with images
  imagesArray.forEach((imageUrl, index) => {
    // Create a carousel item
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) carouselItem.classList.add("active"); // Add 'active' class for the first image

    // Create an image element
    let img = document.createElement("img");
    img.src = imageUrl; // Set the image URL
    img.alt = `Adventure Image ${index + 1}`; // Add alt text for accessibility
    img.classList.add("d-block", "w-100", "activity-card-image");

    // Append the image to the carousel item
    carouselItem.appendChild(img);
    innerCarousel.appendChild(carouselItem); // Append carousel item to the inner carousel

    // Create an indicator
    let indicator = document.createElement("button");
    indicator.type = "button";
    indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-bs-slide-to", index.toString());
    if (index === 0) indicator.classList.add("active"); // Add 'active' class for the first indicator
    indicator.setAttribute("aria-current", index === 0 ? "true" : "false");
    indicator.setAttribute("aria-label", `Slide ${index + 1}`);

    // Append the indicator
    indicators.appendChild(indicator);
  });
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
