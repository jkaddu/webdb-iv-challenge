exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (tbl) => {
		tbl.increments();
		tbl.string('name', 120).notNullable().unique();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExist('dishes');
};
