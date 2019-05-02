exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('dishes', (tbl) => {
			tbl.increments();
			tbl.string('name', 120).notNullable().unique();
		})
		.createTable('recipe', (tbl) => {
			tbl.increments();
			tbl.string('name', 120).notNullable().unique();
		})
		.createTable('recipe_ingredients', (tbl) => {
			tbl.increments();
			tbl.string('name', 120).notNullable();
		});
};

exports.down = function(knex, Promise) {};
