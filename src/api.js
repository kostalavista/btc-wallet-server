const express = require("express");
const router = express.Router();
const Addresses = require("./database/models/Addresses");
const generateAddressData = require("./generateAddressData");
const insertIntoDatabase = require('./database/insertIntoDatabase');

router.get('/address/:address', (req, res) => {
	const address = req.params.address;

	Addresses.findOne({address}).then(result => {
		const data = generateAddressData(address);

		return new Promise(resolve => {
			if (result) {
				res.send(result);
				resolve();
			} else {
				insertIntoDatabase('Addresses', data).then(() => {
					res.send(data);
					resolve();
				})
			}
		});
	});
});

module.exports = router;