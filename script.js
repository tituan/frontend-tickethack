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
                    console.log(element.departure)
                    console.log(element.departure)
                    document.querySelector("#newTrip").innerHTML += `
                    <div class="">
                        <div id="depShow">${element.departure}</div>
                        <div id="arrShow">${element.arrival}</div>
                        <div id="dateShow">${element.date}</div>
                        <button  type="button" id="buyButton" >Search</button>
                    </div>
                    
                `;
                }
            } else {
                console.log('no')
            }
            console.log(data);
        });
});
