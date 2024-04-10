// extensions/string.extension.js
/*
    //pour l'utiliser : 
    //extensions
    import '$extensions/string.extension.js';
*/

/**
 *
 * @returns {string} - Retourne la chaine de caractère SANS la première lettre
 */
String.prototype.removeFirstChar = function () {
	return this.substring(1);
};

// Vérifier si une chaîne contient uniquement des chiffres
String.prototype.isOnlyDigits = function () {
	return /^\d+$/.test(this);
};

// Vérifier si une chaîne contient uniquement des lettres alphabétiques
String.prototype.isOnlyAlphas = function () {
	return /^[a-zA-Z]+$/.test(this);
};

// Vérifier si une chaîne contient au moins un chiffre
String.prototype.containsDigit = function () {
	return /\d/.test(this);
};

// Vérifier si une chaîne contient au moins une lettre alphabétique
String.prototype.containsAlpha = function () {
	return /[a-zA-Z]/.test(this);
};

// Vérifier si une chaîne est vide ou composée uniquement d'espaces
String.prototype.isEmptyOrWhitespace = function () {
	return /^\s*$/.test(this);
};

// Convertir la première lettre de la chaîne en majuscule
String.prototype.capitalizeFirstLetter = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

//retourne un string avec toutes les premières lettres en majuscule.
String.prototype.capitalizeAllFirstLetters = function () {
	return this.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

//retourne un string en camelCase.
String.prototype.toCamelCase = function () {
	return this.replace(/\s(.)/g, function ($1) {
		return $1.toUpperCase();
	})
		.replace(/\s/g, '')
		.replace(/^(.)/, function ($1) {
			return $1.toLowerCase();
		});
};

//retourne un string en PascalCase.
String.prototype.toPascalCase = function () {
	return this.replace(/\s(.)/g, function ($1) {
		return $1.toUpperCase();
	})
		.replace(/\s/g, '')
		.replace(/^(.)/, function ($1) {
			return $1.toUpperCase();
		});
};

// Convertir la première lettre de chaque mot en majuscule
String.prototype.capitalizeWords = function () {
	return this.replace(/\b\w/g, (l) => l.toUpperCase());
};

// Compter le nombre d'occurrences d'une sous-chaîne
/**
 *
 * @param {string} substring
 * @returns {number} - Retourne le nombre d'occurences de la sous chaine
 *
 */
String.prototype.countOccurrences = function (substring) {
	const regex = new RegExp(substring, 'g');
	return (this.match(regex) || []).length;
};

/**
 *
 * @param {string|RegExp} search
 * @param {string} replacement
 * @returns {string} - Retourne la chaine de caractère avec les occurences remplacées
 */
String.prototype.replaceAllOccurence = function (search, replacement) {
	return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 *
 * @param {string|RegExp} search
 * @returns {string} - Retourne la chaine de caractère avec les occurences supprimées
 */
String.prototype.removeAllOccurence = function (search) {
	return this.replaceAll(search, '');
};

/**
 *
 * @param {string} search
 * @returns {string} - Retourne la chaine de caractère avec toutes les occurrences d'un string supprimées sauf la première.
 */
String.prototype.removeAllOccurenceButFirst = function (search) {
	return search.concat(this.replaceAll(search, ''));
};

/**
 *
 * @param {string} search
 * @returns {string} - Retourne la chaine de caractère avec toutes les occurrences d'un string supprimées sauf la dernière.
 */
String.prototype.removeAllOccurenceButLast = function (search) {
	return this.replaceAll(search, '').concat(search);
};

/**
 *
 * @param {string|RegExp} search
 * @returns {string} - Retourne la chaine de caractère avec toutes les occurrences d'un string supprimées sauf la première et la dernière.
 */
String.prototype.removeFirstOccurence = function (search) {
	return this.replace(search, '');
};

/**
 *
 * @param {string} search
 * @returns {string} - Retourne la chaine de caractère avec toutes les occurrences d'un string supprimées sauf la première et la dernière.
 */
String.prototype.removeLastOccurence = function (search) {
	return this.replaceAll(search, '').concat(search);
};

/**
 *
 * @param {string} search
 * @returns {string} - Retourne la chaine de caractère avec toutes les occurrences d'un string supprimées sauf la première et la dernière.
 */
String.prototype.removeFirstAndLastOccurence = function (search) {
	return this.replace(search, '').concat(search);
};

// Inverser la chaîne de caractères
String.prototype.reverse = function () {
	return this.split('').reverse().join('');
};

// Supprimer les espaces au début et à la fin de la chaîne
String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/g, '');
};

/**
 *
 * @param {string} substring
 * @returns {boolean} - Retourne un booléen pour savoir si la chaine se termine par la sous chaine
 */
String.prototype.endsWith = function (substring) {
	return this.indexOf(substring, this.length - substring.length) !== -1;
};

/**
 *
 * @param {string} substring
 * @returns {boolean} - Retourne un booléen pour savoir si la chaine commence par la sous chaine
 */
String.prototype.startsWith = function (substring) {
	return this.indexOf(substring) === 0;
};

/**
 *
 * @param {string} substring
 * @returns {boolean} - Retourne un booléen pour savoir si la chaine contient la sous chaine
 */
String.prototype.contains = function (substring) {
	return this.indexOf(substring) !== -1;
};

// Convertir la chaîne en slug (format URL convivial)
String.prototype.toSlug = function () {
	return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

/**
 *
 * @param {string} balise
 * @returns {string} - Retourne la chaine de caractère avec la balise au début et à la fin
 */
String.prototype.addBalise = function (balise) {
	return balise.concat(this, balise);
};

//verifie si la chaine est un numero finess ( 9 chiffres, les deux premier correspondent à un departement)
String.prototype.isFinessValid = function () {
	const regex = /^[0-9]{9}$/;
	return regex.test(this);
};

String.prototype.formatToFiness = function () {
	// Ajoute des espaces pour la lisibilité
	return this.replace(/(\d{1,2})(\d{0,7})/, function (match, p1, p2) {
		let formatted = p1;
		if (p2) formatted += ' ' + p2;
		return formatted;
	}).trim(); // Ajout d'un trim pour retirer les espaces en trop
};

String.prototype.isFrenchSocialSecurityNumberValid = function (withKey = null) {
	if (withKey == null) {
		return (
			this.isFrenchSocialSecurityNumberValidWithoutKey() ||
			this.isFrenchSocialSecurityNumberValidWithKey()
		);
	}

	if (withKey == true) return this.isFrenchSocialSecurityNumberValidWithKey();
	else return this.isFrenchSocialSecurityNumberValidWithoutKey();
};

String.prototype.isFrenchSocialSecurityNumberValidWithoutKey = function () {
	const regex8 = /^(1|2)\d{2}(0[1-9]|1[0-2])\d{8}$/;
	return regex8.test(this);
};

String.prototype.isFrenchSocialSecurityNumberValidWithKey = function () {
	const regex10 = /^(1|2)\d{2}(0[1-9]|1[0-2])\d{10}$/;
	return regex10.test(this);
};

String.prototype.formatToFrenchSocialSecurityNumber = function () {
	// Ajoute des espaces pour la lisibilité
	return this.replace(
		/(\d{1,1})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/,
		function (match, p1, p2, p3, p4, p5, p6, p7) {
			let formatted = p1; //sexe
			if (p2) formatted += ' ' + p2; //année
			if (p3) formatted += ' ' + p3; //mois
			if (p4) formatted += ' ' + p4; //département
			if (p5) formatted += ' ' + p5; //commune
			if (p6) formatted += ' ' + p6; //numéro
			if (p7) formatted += '  ' + p7; //clé

			return formatted;
		}
	).trim(); // Ajout d'un trim pour retirer les espaces en trop
};

String.prototype.isFrenchPhoneNumberValid = function () {
	const regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
	return regex.test(this);
};
String.prototype.formatToFrenchPhoneNumber = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
};

String.prototype.isFrenchZipCodeValid = function () {
	const regex = /^[0-9]{5}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchZipCode = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{2})(\d{3})/, '$1 $2');
};

String.prototype.isFrenchSirenValid = function () {
	const regex = /^[0-9]{9}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchSiren = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
};

String.prototype.isFrenchSiretValid = function () {
	const regex = /^[0-9]{14}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchSiret = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{3})(\d{3})(\d{3})(\d{5})/, '$1 $2 $3 $4');
};

String.prototype.isFrenchTvaIntracomValid = function () {
	const regex = /^[A-Z]{2}[0-9]{2}[0-9A-Z]{5,9}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchTvaIntracom = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

String.prototype.isFrenchIbanValid = function () {
	const regex = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchIban = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
};

String.prototype.isFrenchBicValid = function () {
	const regex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
	return regex.test(this);
};

String.prototype.formatToFrenchBic = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
};

String.prototype.isFrenchAdeliValid = function () {
	const regex = /^[0-9]{9}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchAdeli = function () {
	//ajoute des espaces pour la lisibilité

	// Ajoute des espaces pour la lisibilité
	return this.replace(/(\d{1,2})(\d{0,2})(\d{0,4})(\d{0,1})/, function (match, p1, p2, p3, p4) {
		let formatted = p1;
		if (p2) formatted += ' ' + p2;
		if (p3) formatted += ' ' + p3;
		if (p4) formatted += ' ' + p4;
		return formatted;
	}).trim(); // Ajout d'un trim pour retirer les espaces en trop
};

//11 chiffres qui commence par un 1
String.prototype.isFrenchRPPSValid = function () {
	const regex = /^1[0-9]{10}$/;
	return regex.test(this);
};

String.prototype.isFrenchInternePPValid = function () {
	//regex qui commence par 10 et qui a jusqu'a 42 chiffres
	const regex = /^[0-9]{0,20}$/;
	return regex.test(this);
};

String.prototype.formatToFrenchRPPS = function () {
	//ajoute des espaces pour la lisibilité
	return this.replace(/(\d{1,1})(\d{0,10})/, function (match, p1, p2) {
		let formatted = p1;
		if (p2) formatted += ' ' + p2;
		return formatted;
	}).trim(); // Ajout d'un trim pour retirer les espaces en trop
};

String.prototype.formatToNPP = function () {
	// on recupere le premier caractere
	let firstChar = this.charAt(0);

	if (firstChar === '1') {
		return this.replace(/(\d{1,2})(\d{0,99})/, function (match, p1, p2) {
			let formatted = p1;
			if (p2) formatted += ' ' + p2;
			return formatted;
		}).trim(); // Ajout d'un trim pour retirer les espaces en trop
	} else if (firstChar === '0' || firstChar === '8') {
		//ajoute des espaces pour la lisibilité
		return this.replace(/(\d{1,1})(\d{0,99})/, function (match, p1, p2) {
			let formatted = p1;
			if (p2) formatted += ' ' + p2;
			return formatted;
		}).trim(); // Ajout d'un trim pour retirer les espaces en trop
	}
	//on retourne null
	return this.toString();
};

String.prototype.removeSpaces = function () {
	return this.replace(/ /g, '');
};

/**
 *
 * @param {number} nbCharacter
 * @returns
 */
String.prototype.getFirstCharacters = function (nbCharacter) {
	return this.substring(0, nbCharacter);
};

//is ??
//retourne un booleen pour savoir si le string est un Nombre
String.prototype.isNumber = function () {
	return /^\d+$/.test(this);
};

//retourne un booleen pour savoir si le string est un entier
String.prototype.isInteger = function () {
	return /^-?\d+$/.test(this);
};

//retourne un booleen pour savoir si le string est un float
String.prototype.isFloat = function () {
	return /^-?\d+\.\d+$/.test(this);
};

//retourne un booleen pour savoir si le string est un double
String.prototype.isDouble = function () {
	return /^-?\d+\.?\d*$/.test(this);
};

//retourne un booleen pour savoir si le string est un boolean
String.prototype.isBoolean = function () {
	return /^true$|^false$/i.test(this);
};

//retourne un booleen pour savoir si le string est un Date
String.prototype.isDate = function () {
	return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(this);
};

//retourne un booleen pour savoir si le string est un DateTime
String.prototype.isDateTime = function () {
	return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(this);
};

//retourne un booleen pour savoir si le string est un Time
String.prototype.isTime = function () {
	return /^\d{2}:\d{2}:\d{2}.\d{3}$/.test(this);
};

//retourne un booleen pour savoir si le string est un TimeStamp
String.prototype.isTimeStamp = function () {
	return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(this);
};

//retourne un booleen pour savoir si le string est un Json
String.prototype.isJson = function () {
	return /^{.*}$/.test(this);
};

//retourne un booleen pour savoir si le string est un email
String.prototype.isEmail = function () {
	//return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this);
	return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this);
};

//retourne un booleen pour savoir si le string est un url
String.prototype.isUrl = function () {
	return /^http[s]?:\/\/.*/.test(this);
};

//retourne un booleen pour savoir si le string est un numero de telephone
String.prototype.isPhone = function () {
	return /^(\+33|0)[1-9](\d{2}){4}$/.test(this);
};

//retourne un booleen pour savoir si le string est un code Postal
String.prototype.isPostalCode = function () {
	return /^[0-9]{5}$/.test(this);
};

//retourne un booleen pour savoir si le string est une ip
String.prototype.isIp = function () {
	return /^(\d{1,3}\.){3}\d{1,3}$/.test(this);
};

//retourne un booleen pour savoir si le string est un mac
String.prototype.isMac = function () {
	return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(this);
};

//retourne un booleen pour savoir si le string est un hex
String.prototype.isHex = function () {
	return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(this);
};

//retourne un booleen pour savoir si le string est un slug
String.prototype.isSlug = function () {
	return /^[a-z0-9-]+$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur en hex
String.prototype.isHexColor = function () {
	return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur en rgb
String.prototype.isRgbColor = function () {
	return /^rgb\((\d{1,3}%?,\s*){2}\d{1,3}%?\)$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur en rgba
String.prototype.isRgbaColor = function () {
	return /^rgba\((\d{1,3}%?,\s*){3}(0(\.\d+)?|1(\.0+)?)\)$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur en hsl
String.prototype.isHslColor = function () {
	return /^hsl\(\d{1,3}(,\s*\d{1,3}%?){2}\)$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur en hsla
String.prototype.isHslaColor = function () {
	return /^hsla\(\d{1,3}(,\s*\d{1,3}%?){2}(,\s*(0(\.\d+)?|1(\.0+)?))\)$/.test(this);
};

//retourne un booleen pour savoir si le string est une couleur CSS
String.prototype.isCssColor = function () {
	return (
		this.isHexColor() ||
		this.isRgbColor() ||
		this.isRgbaColor() ||
		this.isHslColor() ||
		this.isHslaColor()
	);
};

String.prototype.toDateTime = function () {
	try {
		if (!this.isNumber()) {
			console.log("Mauvais format d'entrée");
			return null;
		}
		let str = '';
		if (str.length < 17) str = this.padEnd(17, '0');
		return new Date(
			str.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d\d)$/, '$4:$5:$6.$7 $2/$3/$1')
		);
	} catch (error) {
		console.log(error);
		return null;
	}
};

String.prototype.toDate = function () {
	try {
		if (!this.isNumber() && !(this.length === 8)) {
			console.log("Mauvais format d'entrée");
			return null;
		}
		let str = '';
		if (this.length < 17) str = this.padEnd(17, '0');
		return new Date(str.replace(/^(\d{4})(\d\d)(\d\d)$/, '$2/$3/$1'));
	} catch (error) {
		console.log(error);
		return null;
	}
};

/**
 *
 * @param {number} length
 * @returns
 */
String.prototype.limitToLength = function (length) {
	return this.length > length ? this.substring(0, length - 1) + '\u2026' : this;
};

/**
 * @description
 *      retourne un boolean pour savoir si un string en format date est inferieur a une autre date en string
 * @param {*} date
 * @returns boolean
 */
String.prototype.isBefore = function (date) {
	try {
		if (!this.isDate() || !date.isDate()) {
			console.log("Mauvais format d'entrée");
			return null;
		}
		return new Date(this) < new Date(date);
	} catch (error) {
		console.log(error);
		return null;
	}
};

/**
 * @description
 *      retourne un boolean pour savoir si un string en format date est superieur a une autre date en string
 * @param {*} date
 * @returns boolean
 */
String.prototype.isAfter = function (date) {
	try {
		if (!this.isDate() || !date.isDate()) {
			console.log("Mauvais format d'entrée");
			return null;
		}
		return new Date(this) > new Date(date);
	} catch (error) {
		console.log(error);
		return null;
	}
};
