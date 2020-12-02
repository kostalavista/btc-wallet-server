const getRandomIntInclusive = require("./utils/getRandomIntInclusive");
const getBTCAddress = require("./utils/getBTCAddress");

function generateAddressData(address) {
	const balance = getRandomIntInclusive(1, 10000);
	const transactionCount = getRandomIntInclusive(1, 10);
	const transactions = [];

	for (let i = 0; i < transactionCount; i++) {
		const time = getRandomIntInclusive(1605903150, 1606903150);
		const isIncoming = getRandomIntInclusive(0, 1);
		const secondAddress = getBTCAddress(getRandomIntInclusive(0, 9));
		const value = getRandomIntInclusive(1, 500);
		const commission = getRandomIntInclusive(1, 10);

		transactions.push({
			time,
			isIncoming,
			secondAddress,
			value,
			commission,
		});
	}

	return {
		address,
		balance,
		transactions,
	}
}

module.exports = generateAddressData;