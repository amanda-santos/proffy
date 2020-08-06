import Knex from 'knex';

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}