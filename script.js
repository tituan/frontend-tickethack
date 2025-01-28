// alert("ca marche");
// function getValuesTrip() {
const searchButton = document
    .querySelector("#submitButton")
    .addEventListener("click", function () {
        const departureInput = document.querySelector("#DepartureInput").value;
        const arrivalInput = document.querySelector("#arrivalInput").value;
        const dateInput = document.querySelector("#dateInput").value;
        let newTrip = Document.querySelector("#newTrip");
        
        const departure = document.querySelector("#depShow")
        const arrival = document.querySelector("#arrShow")
        const dateShow = document.querySelector("#dateShow")
        
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(data => {
            if (data.trips) {
                for (let i = 0; i < data.trips.length; i++) {
                    document.querySelector('#newTrip').innerHTML += `
                  <div id="depShow">${}</div>
                    <div id="arrShow">${}</div>
                    <div id="dateShow">${}</div>
                    <button  type="button" id="buyButton" >Search</button>
                `;
                }
                updateDeleteCityEventListener();
            }
        });

    });
// }
