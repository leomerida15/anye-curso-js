/** @format */
const os = require("os");
const respOs = os.networkInterfaces();

// estructuras complejas
const perros = [
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

// filtar en la lista de perros que perros tienen vacunas
// y si las tiene dime cuales tienen
// cual es el perro mas viejo
//
/* 
	or --> ||
	and --> &&
	not --> !

*/

let vacunados = [];
let vacu = [];
let viejo = { nombre: "", edad: 0 };
let joven = {};
let mas_viejo_vacunas = {};

for (let i = 0; i < perros.length; i++) {
	// console.log("i", i);
	const perro = perros[i];

	// console.log("perro", perro);

	if (perro.vacunas.status === true) {
		vacunados.push(perro.nombre);

		vacu.push({
			nombre: perro.nombre,
			vacunas: perro.vacunas.lista,
		});
	}

	if (perro.edad > viejo.edad) {
		viejo.nombre = perro.nombre;
		viejo.edad = perro.edad;
	}

	if (i === 0 || perro.edad < joven.edad) {
		joven.nombre = perro.nombre;
		joven.edad = perro.edad;
	}
}

console.log("vacunados", vacu);
console.log("");
console.log("viejo", viejo);
console.log("");
console.log("joven", joven);
console.log("respOs", respOs);
console.log("ip", ip);
