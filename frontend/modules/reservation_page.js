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
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

    if(reservations.length===0){
      document.getElementById("reservation-table-parent").style.display="none";
      document.getElementById("no-reservation-banner").style.display="block";

    }
    else{
      document.getElementById("no-reservation-banner").style.display="none";
      document.getElementById("reservation-table-parent").style.display="block";

    }

      reservations.forEach(element => {
      let new_row=document.createElement("tr");
      let adv_date=new Date(element.date);

      let final_short_date=adv_date.toLocaleDateString("en-IN");
      let date_time=new Date(element.time);
      let day=date_time.getDate();
      let month=date_time.toLocaleString('default', { month: 'long' }); 
      let year=date_time.getFullYear(); 
      let curr_time=date_time.toLocaleString('en-IN',{day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
      let final_curr_date=curr_time.replace(" at",",");
    
      
      new_row.innerHTML=`
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.adventureName}</td>
      <td>${element.person}</td>
      <td>${final_short_date}</td>
      <td>${element.price}</td>
      <!-- <td>${day} ${month} ${year}, "${curr_time[1]} ${curr_time[2]}</td> ,no need to this now-->
      <td>${final_curr_date}</td>
      <td id="${element.id}">
      <a href="../detail/?adventure=${element.adventure}">
      <button class="reservation-visit-button">Visit Adventure</button>
      </a>
      </td>

      <!--for href of above <a> see the url of reservations page and adv_details page -->
      
    `;
    let myTable= document.getElementById("reservation-table");
    myTable.append(new_row);
});

}


export { fetchReservations, addReservationToTable };
