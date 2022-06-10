/** @format */

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

// TODO: Funciones
/*
 
*/
// ? const perros = [... , .... ,...]
//
const vacunados = perros.filter((perro) => {
	// debe rotornar un bleano true o false
	if (perro.vacunas.status === true) {
		return true;
	}
	//
	else {
		return false;
	}
});

const vacunadosUneLine = perros.filter((perro) => perro.vacunas.status);

console.log("vacunados", vacunados);

const Formateados = vacunados.map((perro, i) => {
	//
	const formateado = {
		nombre: perro.nombre,
		vacunas: perro.vacunas.lista,
		id: i,
	};

	return formateado;
});

const FormateadosOneLine = vacunados.map((perro) => ({
	nombre: perro.nombre,
	vacunas: perro.vacunas.lista,
}));

console.log("Formateados", Formateados);

const dolbeUsoDeMetodos = perros
	.filter((perro) => perro.vacunas.status)
	.map(({ nombre, vacunas: { lista } }) => ({
		nombre,
		vacunas: lista,
	}));

console.log("dolbeUsoDeMetodos", dolbeUsoDeMetodos);

const union = dolbeUsoDeMetodos.concat(FormateadosOneLine);

console.log("union", union);

const text = "TEXTO EN MAYUSCULAS";

console.log("text", text.toLocaleLowerCase());
