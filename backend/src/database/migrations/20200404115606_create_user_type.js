
exports.up = function(knex) {
  return knex.schema.createTable('user_type', function (table) {
    table.increments();

    table.string('description').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_type');
};
