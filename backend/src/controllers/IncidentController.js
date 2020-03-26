const connection = require('../database/connection');

module.exports = {
    //lista os incidentes
    async index(request, response) {
        const { page = 1 } = request.query;

        //[count] para retornar a primeira posição do array
        //mostra o total de incidentes
        const [count] = await connection('incidents').count();

        console.log(count)

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5) //limita a busca no BD para 5 incidentes
            .offset((page - 1) * 5) //pula 5 registros por página
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        //o total de itens é retornado pelo cabeçalho
        //X-Total-Count é o nome dado para o cabeçalho
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    //cria o incidente
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; //o cabeçalho guarda requisições do contexto da requisição

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permited.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}