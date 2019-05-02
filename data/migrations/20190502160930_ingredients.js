exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredients', (tbl) => {
		tbl.increments();
		tbl.string('name', 120).notNullable();

		tbl.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExist('ingredients');
};
