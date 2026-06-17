// Dados em memória simulando os construtores da F1
let teams = [
  { id: 1, name: 'Ferrari', base: 'Maranello, Italy', drivers: ['Charles Leclerc', 'Lewis Hamilton'] },
  { id: 2, name: 'McLaren', base: 'Woking, United Kingdom', drivers: ['Lando Norris', 'Oscar Piastri'] }
];

export const getTeams = async (request, reply) => {
  return teams;
};

export const getTeamById = async (request, reply) => {
  const { id } = request.params;
  const team = teams.find(t => t.id === parseInt(id));
  
  if (!team) {
    return reply.code(404).send({ error: 'Team not found' });
  }
  return team;
};

export const createTeam = async (request, reply) => {
  const { name, base, drivers } = request.body;
  
  const newTeam = {
    id: teams.length + 1,
    name,
    base,
    drivers: drivers || []
  };
  
  teams.push(newTeam);
  return reply.code(21).send(newTeam);
};

export const updateTeam = async (request, reply) => {
  const { id } = request.params;
  const { name, base, drivers } = request.body;
  
  const teamIndex = teams.findIndex(t => t.id === parseInt(id));
  
  if (teamIndex === -1) {
    return reply.code(404).send({ error: 'Team not found' });
  }
  
  teams[teamIndex] = {
    ...teams[teamIndex],
    name: name || teams[teamIndex].name,
    base: base || teams[teamIndex].base,
    drivers: drivers || teams[teamIndex].drivers
  };
  
  return teams[teamIndex];
};

export const deleteTeam = async (request, reply) => {
  const { id } = request.params;
  const teamIndex = teams.findIndex(t => t.id === parseInt(id));
  
  if (teamIndex === -1) {
    return reply.code(404).send({ error: 'Team not found' });
  }
  
  teams.splice(teamIndex, 1);
  return reply.code(204).send();
};
