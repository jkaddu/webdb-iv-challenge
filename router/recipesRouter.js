const knex = require('knex');
const router = require('express').Router();

const knexConfig = {
	client: 'sqlite3',
	connection: {
		filename: './data/dish.db3'
	},
	useNullAsDefault: true
};

const db = knex(knexConfig);

router.get('/', (req, res) => {
	db('recipes')
		.then((recipe) => {
			res.status(200).json(recipe);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.first()
		.then((recipe) => {
			if (recipe) {
				res.status(200).json(recipe);
			} else {
				res.status(404).json({ message: 'Recipe not found.' });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST
router.post('/', (req, res) => {
	if (!req.body.name) {
		res.status(400).json({ message: 'Please provide a name.' });
	} else {
		db('recipes')
			.insert(req.body, 'id')
			.then((ids) => {
				db('recipes').where({ id: ids[0] }).first().then((recipe) => {
					res.status(200).json(recipe);
				});
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}
});

// Update
router.put('/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.update(req.body)
		.then((id) => {
			if (id === id) {
				res.status(200).json({ message: 'Record updated.' });
			} else {
				res.status(404).json({ message: 'Recipe ID does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// Delete
router.delete('/:id', (req, res) => {
	db('recipes')
		.where({ id: req.params.id })
		.delete()
		.then((id) => {
			if (id === id) {
				res.status(200).json({ message: 'Record deleted.' });
			} else {
				res.status(404).json({ message: 'Recipe ID does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
