function getBTCAddress(num) {
	if (num < 0 || num > 9) num = 0;

	const arr = [
		'1Lkiue9S5nwuvmkjUM57SYKJYheAgUsrbk',
		'1F76xuYdYjKUHvkGrLqKjR3p4dxudd7Y1',
		'153qTe5dS4cATCBPuj3yMDd3zpduUQ1bpG',
		'1L9eCBGKYwNvFbQRgPqkrbW5trHhg46CbE',
		'1EwPW98KrVuXaZAbgcrHTL8T4t1zfWuhPZ',
		'1CNyDyM6auMFm7WgR4PhFQKoRhKWVsUREr',
		'1EuosjXpW6iXMrwGnwpuPw9NC7Z51jU38v',
		'1MHBuQuLuzfyq9qyhLWEHQTEf1MR42aDpL',
		'12o46UY7M7HoTMdCHXVPdhafgVX7c6vzDq',
		'1PG1Z1f7HdcmaAspLHwyzZCtA6JpEJum43',
	];

	return arr[num]
}

module.exports = getBTCAddress;