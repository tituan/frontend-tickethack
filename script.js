// alert("ca marche");
// function getValuesTrip() {
const searchButton = document
    .querySelector("#submitButton")
    .addEventListener("click", function () {
        const departureInput = document.querySelector("#DepartureInput").value;
        const arrivalInput = document.querySelector("#arrivalInput").value;
        const dateInput = document.querySelector("#dateInput").value;
        console.log(departureInput);
        console.log(arrivalInput);
        console.log(dateInput);
    });
// }
