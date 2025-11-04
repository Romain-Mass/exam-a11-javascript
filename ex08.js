function isNationalIDValid(name, age, zip, password) {
	if(name == "" && age > 17 && age < 66 && zip > 0 && zip < 99999 && password != "azerty"
         && password != "quertry" && password != "1234") {
            return false
         } else {
            return true
         }
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true