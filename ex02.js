function greetings(firstname) {
	let greetings = "Bienvenu,";

    if (firstname == "") {
    return greetings + "" + " !"
    } else {
        return greetings + " Ben" + " !"
    }
}

console.log(greetings("")); // Résultat attendu: "Bienvenue, !"
console.log(greetings("Ben")); // Résultat attendu: "Bienvenue, Ben !