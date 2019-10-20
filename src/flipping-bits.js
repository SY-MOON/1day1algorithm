function flippingBits(N) {
	const refVal = Math.pow(2, 32) - 1; 
	return refVal - N; 
}

module.exports = flippingBits