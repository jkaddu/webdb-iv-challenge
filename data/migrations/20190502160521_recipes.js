exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments();
			tbl.string('name', 120).notNullable().unique();

			tbl
				.integer('dish_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('dishes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})
		.createTable('recipes_ingredients', (tbl) => {
			tbl.increments();
			tbl.string('name', 120).notNullable().unique();

			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');

			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExist('recipes');
};
