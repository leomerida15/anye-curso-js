/** @format */

const Fastify = require("fastify");
const Router = require("./router");
const dataSource = require("./db");

const fastify = Fastify();

//Router(fastify);

dataSource
	.initialize()
	.then(() => {
		console.log("DB OK");
		fastify.listen({ port: 3000 }, () => {
			console.log("servidor corriendo en puerto 3000");
		});
	})
	.catch((err) => {
		console.log("DB ERROR");

		console.error(err);
	});
