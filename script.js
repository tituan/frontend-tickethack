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
                for (const element of data.trips) {
                    document.querySelector("#resultBox").innerHTML += `
                     <div class="newTrip">
                    <div class="depShow"><p>${element.departure}</p></div>
                    <div class="arrShow"><p>${element.arrival}</p></div>
                    <div class="dateShow"><p>${element.date}</p></div>
                    <button  type="button" class="buyButton" >Search</button>
                    </div>
                    `;
                }
                // console.log(data.trips);
                // updateDeleteCityEventListener();
            }
            console.log(data);
        });
});
