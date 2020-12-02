const getEnvParam = require('../../utils/getEnvParam');
const dbUri = getEnvParam('dbUri');

const mongoose = require("mongoose");

const conn = mongoose.createConnection(dbUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

module.exports = conn;