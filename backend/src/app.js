const express = require('express')
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')

const app = express()

app.use(cors());
//informa para o express que será utilizado json para o corpo(body) das requisições
app.use(express.json())
app.use(routes)
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 * Exemplo: http://localhost:3333/users
 * users é um recurso (entidade, tabela do banco de dados)
 */
/**
 * Métodos HTTP:

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
**/

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
    Exemplo: users?page=2&name=Maria&idade=30
 * Route Params: Parâmetros utilizados para identificar recursos
    Exemplo: /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
**/

/**
 * request guarda todos os dados que vem através da requisição. Usado para acessar os parâmetros que vem através dos query params
 * response retorna uma resposta para o usuário
 */

/**
 * SQL: MySQL, SQLite (usado neste projeto), PostgreSQL, etc
 * NoSQL: MongoDB, etc
 */

/**
 * 3 formas de fazer a comunicação com BD
 * 1-Instalar Driver do BD: SELECT * FROM users
 * 2-Query Builder: escreve as queries utilizando JavaScript. Vai estar pronto para aceitar qualquer banco SQL
 *   Exemplo: table('users').select('*').where()
 *   Neste projeto será utilizado o KNEX.JS
 */

