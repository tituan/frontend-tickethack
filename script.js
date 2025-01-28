document.querySelector("#submitButton").addEventListener("click", function () {
    const trip = {
        departure: document.querySelector("#DepartureInput").value,
        arrival: document.querySelector("#ArrivalInput").value,
        date: document.querySelector("#dateInput").value,
    };

    fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trip),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.trips) {
                for (let i = 0; i < data.trips.length; i++) {
                    document.querySelector("#newTrip").innerHTML += `
                  <div id="depShow"></div>
                    <div id="arrShow"></div>
                    <div id="dateShow"></div>
                    <button  type="button" id="buyButton" >Search</button>
                `;
                }
                // updateDeleteCityEventListener();
            }
            console.log(data);
        });
});
