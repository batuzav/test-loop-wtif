	isMultipleOfX = (num, x) =>  num % x;
	

	loop = () => {
		for(let x = 1; x <= 100; x++) {
			let  isMultipleOfThree = isMultipleOfX(x, 3)
			let  isMultipleOfFive  = isMultipleOfX(x, 5)
			console.log(`>>>${x}<<<`);

			while(isMultipleOfThree == 0 || isMultipleOfFive == 0) {
				if(isMultipleOfThree ==  0 && isMultipleOfFive == 0) {
						console.log('Musical');
						break;
				}
				while( isMultipleOfThree == 0 ) {
					console.log('Music');
					isMultipleOfThree += isMultipleOfThree;
					break;
				} 
				while( isMultipleOfFive == 0 ) {
					console.log('TI');
					break;
				}
				break;
			} 
		}	
	}

module.exports = { loop, isMultipleOfX};
