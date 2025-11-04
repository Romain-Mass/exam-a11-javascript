function areaHardcoreCalculator(x1, y1, x2, y2) {
	let resultat1 = y2 - y1;
    let resultat2 = x2 - x1;
    let final = resultat1 * resultat2;
    return final
}

console.log(areaHardcoreCalculator(0, 1, 3, 2)); // Résultat attendu: 3
console.log(areaHardcoreCalculator(1, 68, 2, 87)); // Résultat attendu: 19