const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres hexadecimais

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