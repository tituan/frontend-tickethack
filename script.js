document.querySelector("#submitButton").addEventListener("click", function () {
    
    const trip = {
        departure: document.querySelector("#DepartureInput").value,
        arrival: document.querySelector("#ArrivalInput").value,
        date: document.querySelector("#dateInput").value,
    };

    if (trip.departure && trip.arrival && trip.date) {
        
        fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(trip),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.result === true) {
                    for (const element of data.trips) {
                        // document.querySelector("#messagetBox").css('display:none')
                        document.querySelector("#resultBox").innerHTML += `
                         <div class="newTrip">
                        <div class="depShow"><p>${element.departure}</p></div>
                        <div class="arrShow"><p>${element.arrival}</p></div>
                        <div class="dateShow"><p>${element.date}</p></div>
                        <button  type="button" class="buyButton" >Search</button>
                        </div>
                        `;
                    }
                    // updateDeleteCityEventListener();
                } else if ((data.result === false)) {
                    document.querySelector("#messageBox-img").src ="./images/notfound.png";
                    document.querySelector(".bookingText").textContent = "No trip found.";
                }
            });
    } else {
        alert("Empty fields")
    }
    
});
