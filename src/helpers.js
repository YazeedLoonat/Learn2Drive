const CALCULATE_TOTAL = (cart) => {
	let total = 0;
	cart.forEach(item => {
		total += (item.cost * item.amount);
	});
	return total;
};

module.exports = {
	CALCULATE_TOTAL,
};