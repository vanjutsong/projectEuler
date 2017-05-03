var number = prompt("Find the sum of all the multiples of 3 or 5 below this number");

var total = 0;

for (i = 0; i < number; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		total += i;
	}
}

console.log(total);