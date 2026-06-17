import Fastify from 'fastify';
import { teamsRoutes } from './routes/teamsRoutes.js';

const fastify = Fastify({ logger: true });

// Registro de Rotas
fastify.register(teamsRoutes, { prefix: '/api' });

// Inicialização do Servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
    console.log('🚀 Servidor rodando em http://localhost:3333');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
