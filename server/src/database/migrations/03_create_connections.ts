import Knex from 'knex';

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}