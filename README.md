# 🏁 F1 Drivers & Teams API - Node.js & Fastify

Uma API leve, extremamente rápida e minimalista desenvolvida para gerenciar informações de equipes e pilotos da Fórmula 

1. Este projeto foi desenvolvido como um desafio prático na plataforma **DIO (Digital Innovation One)**.
O objetivo principal foi construir um microsserviço eficiente utilizando as melhores práticas de mercado com o ecossistema Node.js.

## 🛠️ Estrutura do Projeto

```text
node-formula-1/
├── src/
│   ├── controllers/
│   │   └── teamsController.js  # Lógica de negócios do CRUD
│   ├── routes/
│   │   └── teamsRoutes.js      # Definição dos endpoints
│   └── server.js               # Inicialização do Fastify
├── .env.example                # Exemplo de variáveis de ambiente
├── .gitignore                  # Arquivos a serem ignorados pelo Git
├── package.json
└── README.md
```

## 🚀 Tecnologias Utilizadas
* **Node.js** (Ambiente de execução)
* **Fastify** (Framework web focado em performance e baixo overhead)
* **JavaScript (ESModules)** (Sintaxe moderna com `import/export`)

## 📂 Como Rodar o Projeto Localmente
1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Maike-Simoncini/node-formula-1.git](https://github.com/Maike-Simoncini/node-formula-1.git)
   cd node-formula-1

2. **Instale as dependências:**
   ```bash
   npm install
   
   ```
 3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   
   ```
   A API estará disponível em http://localhost:3333.
## 🛣️ Rotas da API (Endpoints)
A API simula um banco de dados em memória e possui os seguintes endpoints sob o prefixo /api:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| GET | /api/teams | Retorna todas as equipes cadastradas. |
| GET | /api/teams/:id | Retorna os detalhes de uma equipe específica por ID. |
| POST | /api/teams | Cadastra uma nova equipe no sistema. |
| PUT | /api/teams/:id | Atualiza os dados de uma equipe existente. |
| DELETE | /api/teams/:id | Remove uma equipe do sistema. |

### Exemplo de Corpo para Criação (POST /api/teams):
```json
{
  "name": "Mercedes-AMG Petronas",
  "base": "Brackley, United Kingdom",
  "drivers": ["George Russell", "Kimi Antonelli"]
}
```
## 🧠 Aprendizados e Evoluções
 * **Arquitetura Limpa:** Separação estrita de rotas e controladores (*Controllers*).
 * **Alta Performance:** Substituição do tradicional Express pelo Fastify, garantindo menor consumo de recursos e respostas mais rápidas.
 * **Padrões de Produção:** Uso correto dos códigos de status HTTP (200, 201, 204, 404).

Desenvolvido por Maike Simoncini da Silva.
