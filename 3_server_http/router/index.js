/** @format */

const db = require("../db");

const Router = (fastify) => {
	//
	fastify.get("/", (request, reply) => {
		reply.status(200).send({ mensagge: "hola mundo" });
	});
	//
	fastify.get("/dogs", (request, reply) => {
		//
		const info = db;
		//
		reply.status(200).send({ mensagge: "lista de perritos", info });
	});
};

module.exports = Router;
