/** @format */

// variables
let name = "Dimas";
const apellido = "Merida";

// typos de datos
// string
let nombre = "Dimas";

// number
let edad = 23;

// boolean
let casado = false;

// null
let noExiste = null;

// undefined
let noDefinido = undefined;

// estructuras de datos
// array
let lenguajes = ["PHP", "JS", "CSS"];
let numeros = [1, 2, 3, 4, 5];
let booleans = [true, false, true];
let fechas = [new Date(), new Date()];
let vacio = [];
let nombres_numbers = ["Dimas", 23];

let animales = ["perro", "gato", "loro"];

animales[0]; // => perro
animales[1]; // => gato
animales[2]; // => loro

// objetos
let perro = {
	nombre: "Firulais",
	edad: 2,
	raza: "Chihuahua",
	sexo: "Macho",
	color: "Cafe",
	peso: "5kg",
	vacunas: {
		status: false,
		lista: ["Rabia", "Parvovirus", "Influenza"],
	},
};

perro.nombre; // => Firulais
perro.edad; // => 2
perro.raza; // => Chihuahua

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
			lista: ["Rabia", "Parvovirus", "Influenza"],
		},
	},
	{
		nombre: "Firulais2",
		edad: 3,
		raza: "Chihuahua",
		sexo: "hembra",
		color: "gris",
		peso: "4kg",
		vacunas: {
			status: false,
			lista: [],
		},
	},
];
