// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/dish.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},

		pools: {
			afterCreate: (connection, done) => {
				connection.run('PRAGMA foreign_keys = ON', done);
			}
		}
	}
};
