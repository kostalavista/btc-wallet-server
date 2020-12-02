function insertIntoDatabase(collection, document) {
	const Model = require('./models/' + collection);

	return new Promise(resolve => {
		Model.create(document).then(resolve);
	});
}

module.exports = insertIntoDatabase;