


document.querySelector("#submitButton").addEventListener("click", function () {
    const trip = {
        departure: document.querySelector("#DepartureInput").value,
        arrival: document.querySelector("#ArrivalInput").value,
        date: document.querySelector("#dateInput").value
    }


    fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trip),
    })
    .then(response => response.json())
        .then(data => {
            console.log(data)
    });
});
