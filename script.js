// const moment = require("./moment");

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
                    let valueTrips =
                        document.querySelectorAll(".newTrip").length;
                    if (valueTrips === 0) {
                        createTrip(data.trips);
                    } else {
                        resetResultBox();
                        createTrip(data.trips);
                    }
                } else if (data.result === false) {
                    document.querySelector("#messageBox-img").src =
                        "./images/notfound.png";
                    document.querySelector(".bookingText").textContent =
                        "No trip found.";
                }
            });
    } else {
        alert("Empty fields");
    }
});

function dateFormat(dateRecieve) {
    const date = new Date(dateRecieve);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let dateFormat = `${day}-${month}-${year}`;
    return dateFormat;
}

function resetResultBox() {
    const element = document.querySelectorAll(".newTrip");
    for (let i = 0; i < element.length; i++) {
        element[i].remove();
    }
}

function createTrip(dataTab) {
    for (const element of dataTab) {
        document.querySelector("#messageBox").style.display = "none";
        document.querySelector("#resultBox").style.display = "flex";
        document.querySelector("#resultBox").innerHTML += `
        <div class="newTrip">
            <div class="depShow"><p>${element.departure}</p></div>
            <div class="arrShow"><p>${element.arrival}</p></div>
            <div class="dateShow"><p>${dateFormat(element.date)}</p></div>
            <button  type="button" class="buyButton" >Cart</button>
        </div>
        `;
    }
}
