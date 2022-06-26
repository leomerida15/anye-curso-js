/** @format */

const db = [
	{
		nombre: "Candy",
		edad: 2,
		raza: "poodle",
		sexo: "Hembra",
		color: "Gris",
		peso: "1.5kg",
		vacunas: {
			status: true,
			lista: ["Rabia", "Influenza"],
		},
	},
	{
		nombre: "Firulais",
		edad: 2,
		raza: "Chihuahua",
		sexo: "Macho",
		color: "Cafe",
		peso: "5kg",
		vacunas: {
			status: true,
			lista: ["Rabia", "Influenza"],
		},
	},
	{
		nombre: "Luna",
		edad: 3,
		raza: "bulldog",
		sexo: "hembra",
		color: "gris",
		peso: "15kg",
		vacunas: {
			status: false,
			lista: [],
		},
	},
	{
		nombre: "Paco",
		edad: 5,
		raza: "koker",
		sexo: "macho",
		color: "dorado",
		peso: "16kg",
		vacunas: {
			status: true,
			lista: ["Rabia", "Parvovirus", "Influenza"],
		},
	},
];

module.exports = db;
