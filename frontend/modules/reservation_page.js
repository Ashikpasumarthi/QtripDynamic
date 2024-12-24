import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  let url = `${config.backendEndpoint}/reservations`;
  console.log(url);

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

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // Check if reservations exist
  if (reservations.length > 0) {
    document.getElementById("no-reservation-banner").style.display = "none"; // Hide the no-reservation banner
    let table = document.getElementById("reservation-table"); // Get the reservation table

    reservations.forEach((ele) => {
      let tr = document.createElement("tr"); // Create a new row

      // Format the date in D/MM/YYYY format
      let date = new Date(ele.date); // Parse date from the reservation
      let formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Format as D/MM/YYYY

      // Format the time in "D Month YYYY, hh:mm:ss am/pm" format
      let time = new Date(ele.time); // Parse time from the reservation
      let formattedTime = time.toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      // Populate the row
      tr.innerHTML = `
        <td>${ele.id}</td>
        <td>${ele.name}</td>
        <td>${ele.adventureName}</td>
        <td>${ele.person}</td>
        <td>${formattedDate}</td>
        <td>${ele.price}</td>
        <td>${formattedTime}</td>
        <td>
          <a href=${config.backendEndpoint}/adventures/detail?adventure=${ele.adventure}
             class="reservation-action reservation-visit-button" 
             id="${ele.id}">
             Visit Adventure
          </a>
        </td>
      `;

      // Append the row to the table
      table.appendChild(tr);
    });
  } else {
    // If no reservations, show the no-reservation-banner
    document.getElementById("no-reservation-banner").style.display = "block";
  }

  
  //Conditionally render the no-reservation-banner and reservation-table-parent



  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
