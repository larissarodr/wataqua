
exports.up = function(knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments();

    table.string('username').notNullable;
    table.string('password').notNullable;
    table.string('email').notNullable;
    table.string('fullname').notNullable;
    table.string('initials').notNullable;
    table.boolean('state').notNullable;

    table.integer('user_type_id').notNullable;
    table.foreign('user_type_id').references('id').inTable('user_type');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
