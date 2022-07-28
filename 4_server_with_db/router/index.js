/** @format */

const dataSource = require("../db");

const getDogs = dataSource.getRepository(require("../db/entitys/dogs.db"))

const Router = (fastify) => {
	//
/*	fastify.post("/dogs/create",  (request, reply) => {
		//
		const newdog = request.body;
		getDogs.save(newdog)
			.then((info) => reply.status(200).send({ mensagge: "nuevos perritos", info }))
			.catch((error) => console.log("error",error))
		
	}); */

	fastify.post("/dogs/create", async (request, reply) => {
		
		try {
			const newdog = request.body;
			console.log("newdog",newdog);

			const info = await getDogs.save(newdog)
			console.log("info",info)

			reply.status(200).send({ mensagge: "nuevos perritos", info });		
				
		} catch (error) {
			console.log("error",error);
		}
	});
	fastify.get("/dogs", async (request, reply) => {
		
		try {
			
		const info = await getDogs.find()
			
	
			reply.status(200).send({ mensagge: "lista de perritos", info });		
				
		} catch (error) {
			console.log("error",error);
		}
	});

	fastify.delete("/dogs/delete/:id", async (request, reply) => {
		
		try {
			
			const id_dog = request.params.id;

			await getDogs.delete({
				id: id_dog
			});

			const info = await getDogs.find()

			reply.status(200).send({ mensagge: "nueva lista de perritos", info });		
				
		} catch (error) {
			console.log("error",error);
		}
	});

	fastify.put("/dogs/edit/:id", async (request, reply) => {
		//

		const id_dog = request.params.id;
		const new_info_dog = request.body;
		//

		await getDogs.update({
			id: id_dog
		},new_info_dog);

		const info = await getDogs.find()

		//
		reply.status(200).send({ mensagge: "nuevos perritos", info });
	});
};

module.exports = Router;
