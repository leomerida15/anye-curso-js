/** @format */

const Fastify = require("fastify");
const Router = require("./router");

const fastify = Fastify();

Router(fastify);

fastify.listen({ port: 3000 }, () => {
	console.log("servidor corriendo en puerto 3000");
});
