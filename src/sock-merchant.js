function sockMerchant(n, ar) { 
	let pair = 0; 
	ar.sort(); 

	for(let i = 0; i < n; i++) { 
		if(ar[i] == ar[i+1]) { 
			pair++; 
			i++; 
		} 
	} 

	return pair; 
}

module.exports = sockMerchant