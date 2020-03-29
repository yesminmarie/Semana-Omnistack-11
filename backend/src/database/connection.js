const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config); //escolhe a conexão de desenvolvimento ou de teste

module.exports = connection