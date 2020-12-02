const express = require("express");
const router = express.Router();
const Addresses = require("./database/models/Addresses");
const generateAddressData = require("./generateAddressData");
const insertIntoDatabase = require('./database/insertIntoDatabase');

router.get('/address/:address', (req, res) => {
	const address = req.params.address;

	Addresses.findOne({address}).then(result => {
		return new Promise(resolve => {
			if (result) {
				res.send(result);
				resolve();
			} else {
				const data = generateAddressData(address);
				insertIntoDatabase('Addresses', data).then(() => {
					res.send(data);
					resolve();
				})
			}
		});
	});
});

router.get('/addresses/:address', (req, res) => {
	const addressStr = req.params.address;
	const addressesArr = addressStr.split(',');
	const addressesInfo = [];

	let promises = [];

	addressesArr.forEach(address => {
		const prom = Addresses.findOne({address}).then(result => {
			return new Promise(resolve => {
				if (result) {
					resolve();
					addressesInfo.push(result);
				} else {
					const data = generateAddressData(address);

					insertIntoDatabase('Addresses', data).then(() => {
						resolve();
						addressesInfo.push(data);
					})
				}
			});
		});

		promises.push(prom);
	});

	Promise.all(promises.map(p => p.catch(x => console.error(x)))).then(() => {
		res.send(addressesInfo);
	});
});

module.exports = router;