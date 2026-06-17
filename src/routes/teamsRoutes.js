import { 
  getTeams, 
  getTeamById, 
  createTeam, 
  updateTeam, 
  deleteTeam 
} from '../controllers/teamsController.js';

export async function teamsRoutes(fastify, options) {
  fastify.get('/teams', getTeams);
  fastify.get('/teams/:id', getTeamById);
  fastify.post('/teams', createTeam);
  fastify.put('/teams/:id', updateTeam);
  fastify.delete('/teams/:id', deleteTeam);
}
