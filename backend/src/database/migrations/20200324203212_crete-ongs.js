
//método up é resposnável pela criação da tabela
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary() //chave primária
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

//o que será feito caso não der certo
exports.down = function (knex) {
    return knex.schema.dropTable('ongs') //apaga a tabela
};
