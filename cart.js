fetch('http://localhost:3000/carts')
	.then(response => response.json())
	.then(data => {
		console.log(data.dataTrip)
        const price = []
        const total = []
        for (const element of data.dataTrip) {
            console.log(element)
            console.log(element.departure)
            console.log(element.arrival)
            console.log(element.date)
            document.querySelector("#cartContainer").innerHTML += `
            <div class="newTrip">
                <div class="depShow"><p>${element.departure}</p></div>
                  <span>></span>
                <div class="arrShow"><p>${element.arrival}</p></div>
                <div class="dateShow"><p>${element.date}</p></div>
                <div class="priceShow"><p>${element.price}€</p></div>
                <button type="button" class="buyButton">X</button>
            </div>
            `;
            total.push(element.price)
        }
        const euro = total.reduce((acc, current) => acc + current, 0)
        document.querySelector(".totalPriceEuro").textContent = `Total ${euro} euros`;
    });