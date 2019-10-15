function simpleArraySum(ar) { 
	let result = ar.reduce((acc, cur) => { return acc + cur }); 
	return result; 
}