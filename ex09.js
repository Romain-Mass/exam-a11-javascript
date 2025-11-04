function calculate(n1, n2, operation) {
	return operation(n1, n2);
}


function addition(n1, n2) {
	let resultat = n1 + n2;
    return resultat;
}

function subtraction(n1, n2) {
	let resultat = n1 - n2;
    return resultat;
}

console.log(calculate(0, 1, addition)); // Résultat attendu: 1
console.log(calculate(0, 10, subtraction)); // Résultat attendu: -10