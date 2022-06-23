/** @format */
const axios = require("axios");

function getPerros() {
	axios
		.get("https://dog.ceo/api/breeds/image/random")

		//
		.then((resp) => console.log("resp", resp.data))
		.catch((err) => console.error(err));
}

getPerros();

async function getPerrosAsync() {
	try {
		const resp = await axios.get("https://dog.ceo/api/breeds/image/random");
		//
		console.log("resp", resp.data);
		//
	} catch (error) {
		console.error(error);
	}
}

getPerrosAsync();
