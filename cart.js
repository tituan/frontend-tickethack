// fetch("http://localhost:3000/carts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ tripid: tabId }),
// })

console.log('toitootototo')
fetch('http://localhost:3000/carts')
	.then(response => response.json())
	.then(data => {
		console.log(data)
        // for (const element of data) {
        //     console.log(element.departure)
        // }
});