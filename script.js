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
                console.log(data);
                if (data.result === true) {
                    let valueTrips =
                        document.querySelectorAll(".newTrip").length;
                    document.querySelector("#messageBox").style.display =
                        "none";
                    document.querySelector("#resultBox").style.display = "flex";
                    if (valueTrips === 0) {
                        for (const element of data.dataTrip) {
                            createTrip(element);
                            addNew();
                        }
                    } else {
                        resetResultBox();
                        for (const element of data.dataTrip) {
                            createTrip(element);
                        }
                        addNew();
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

function resetResultBox() {
    const element = document.querySelectorAll(".newTrip");
    for (let i = 0; i < element.length; i++) {
        element[i].remove();
    }
}

function createTrip(dataTab) {
    document.querySelector("#resultBox").innerHTML += `
    <div class="newTrip">
        <div class="depShow"><p>${dataTab.departure}</p></div>
          <span>></span>
        <div class="arrShow"><p>${dataTab.arrival}</p></div>
        <div class="dateShow"><p>${dataTab.date}</p></div>
        <div class="priceShow"><p>${dataTab.price}€</p></div>
        <button  type="button" data-tripid="${dataTab.id}"class="buyButton" >Cart</button>
    </div>
    `;
}

function addNew() {
    let buyButton = document.querySelectorAll(".buyButton");
    buyButton.forEach((element) => {
        element.addEventListener("click", function () {
            console.log("ouch");
        });
    });
}
