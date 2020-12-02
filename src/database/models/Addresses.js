const mongoose = require("mongoose");
const conn = require("../connects/default");

const AddressesSchema = new mongoose.Schema({
	address: String,
	balance: Number,
	transactions: [],
});

const Addresses = conn.model("Addresses", AddressesSchema, "address");

module.exports = Addresses;