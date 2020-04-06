
exports.up = function(knex) {
  return knex.schema.createTable('permissions', function (table) {
    table.increments();

    table.string('description').notNullable;

    table.integer('user_type_id').notNullable;
    table.foreign('user_type_id').references('id').inTable('user_type');

    table.boolean('allow').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('permissions');
};
