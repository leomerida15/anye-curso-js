/** @format */

const Fastify = require('fastify');

const fastify = Fastify();

fastify.get('/', (request, reply) => {
	reply.status(200).send({ mensagge: 'hola mundo' });
});

fastify.listen({ port: 3000 }, () => {
	console.log('servidor corriendo en puerto 3000');
});
