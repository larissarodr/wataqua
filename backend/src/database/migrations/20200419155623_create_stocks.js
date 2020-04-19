
exports.up = function(knex) {
  return knex.schema.createTable('stocks', function (table) {
    table.string('id').notNullable;
    table.string('name').notNullable;
    table.datetime('setup_date').notNullable;
    table.boolean('from_wild').notNullable;
    table.date('collection_date');
    table.date('collection_location');
    table.string('collection_details');
    table.date('date_of_birth');
    table.boolean('has_parents').notNullable;	

    table.string('mom_id');
    table.foreign('mom_id').references('id').inTable('stocks');

    table.string('dad_id');
    table.foreign('dad_id').references('id').inTable('stocks');

    table.integer('responsible_user_id').notNullable;
    table.foreign('responsible_user_id').references('id').inTable('user');

    table.string('relevance');
    table.string('comment');
    table.string('genotype');
    table.string('phenotype');
    table.integer('number_of_males');
    table.integer('number_of_females');
    table.integer('number_of_hermaphrodites');
    table.integer('number_of_juveniles');
    table.boolean('has_dna_sample').notNullable;
    table.string('dna_sample_details');
    table.boolean('has_other_sample').notNullable;
    table.string('other_sample_details');
    table.integer('amount_founder_fish');
    table.datetime('last_check_date');

    table.integer('last_check_user_id');
    table.foreign('last_check_user_id').references('id').inTable('user');

    table.blob('photo1');
    table.blob('photo2');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('stocks');
};
