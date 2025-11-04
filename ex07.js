function getReduction(price, age) {
	if (age < 6) {
        let price = 0
        return price 
    }
    if(age < 19 && age > 5) {
        let resultat = price * 0.5
        return resultat
    }
    if(age > 18 && age < 26) {
        let calcule = price * 0.3
        let resultat = price - calcule
        return resultat
    }
    else {
        return price
    }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45