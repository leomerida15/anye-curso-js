/** @format */

const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
	name: "dogsCode", // Will use table name `category` as default behaviour.
	tableName: "dogsSql", // Optional: Provide `tableName` property to override the default behaviour for table name.
	columns: {
		id: {
			primary: true,
			type: "int",
			generated: true,
		},
		nombre: {
			type: "varchar",
		},
		edad: {
			type: "int",
		},
		raza: {
			type: "varchar",
		},
		sexo: {
			type: "boolean",
		},
		color: {
			type: "varchar",
		},
	},
});
