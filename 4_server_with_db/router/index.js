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

	fastify.post("/dogs/create", (request, reply) => {
		//
		const newdog = request.body;
		db.push(newdog);
		const info = db;

		//
		reply.status(200).send({ mensagge: "nuevos perritos", info });
	});

	fastify.put("/dogs/edit/:id", (request, reply) => {
		//

		const id_dog = request.params.id;
		const new_info_dog = request.body;
		//

		db[id_dog] = { ...db[id_dog], ...new_info_dog };

		const info = db;

		//
		reply.status(200).send({ mensagge: "nuevos perritos", info });
	});

	fastify.delete("/dogs/delete/:id", (request, reply) => {
		//

		const id_dog = request.params.id;

		//

		db = db.filter((dog, index) => {
			if (id_dog !== index) return true;
			//
			else return false;
		});

		const info = db;

		//
		reply.status(200).send({ mensagge: "nuevos perritos", info });
	});
};

module.exports = Router;
