//const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        //insere dados dentro da tabela ongs
        await connection('ongs').insert({
            //colunas
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        //devolve o id como resposta para o cliente
        return response.json({ id });
    }
}