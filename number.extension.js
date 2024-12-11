// extensions/number.extension.js
/**
 * Vérifie si le nombre est compris entre min et max, avec la possibilité de préciser l'inclusivité.
 * @param {Number} min Borne minimale
 * @param {Number} max Borne maximale
 * @param {Object} [options] Options pour préciser l'inclusivité
 * @param {Boolean} [options.minInclusive=true] true si la borne min est incluse
 * @param {Boolean} [options.maxInclusive=true] true si la borne max est incluse
 * @returns {Boolean} vrai si this est compris entre min et max selon les options
 */
Number.prototype.between = function (min, max, { minInclusive = true, maxInclusive = true } = {}) {
    if (min > max) {
        // Si min est supérieur à max, on inverse pour la cohérence
        [min, max] = [max, min];
    }

    // Vérification de la borne inférieure
    const greaterThanMin = minInclusive ? this >= min : this > min;
    // Vérification de la borne supérieure
    const lessThanMax = maxInclusive ? this <= max : this < max;

    return greaterThanMin && lessThanMax;
};

/**
 * Extension de Number pour "clamper" la valeur entre min et max.
 * Si le nombre est inférieur à min, retourne min.
 * Si le nombre est supérieur à max, retourne max.
 * Sinon, retourne le nombre lui-même.
 * @param {Number} min Borne minimale
 * @param {Number} max Borne maximale
 * @returns {Number} La valeur clampée
 */
Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};

/**
 * Extension de Number pour vérifier si le nombre est pair.
 * @returns {Boolean} vrai si le nombre est pair
 */
Number.prototype.isEven = function () {
    return this % 2 === 0;
};

/**
 * Extension de Number pour vérifier si le nombre est impair.
 * @returns {Boolean} vrai si le nombre est impair
 */
Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

/**
 * Extension de Number pour arrondir à un certain nombre de décimales.
 * @param {Number} decimals Le nombre de décimales
 * @returns {Number} La valeur arrondie au nombre de décimales spécifié
 */
Number.prototype.roundTo = function (decimals) {
    if (decimals < 0) throw new RangeError('Le nombre de décimales doit être positif ou nul.');
    const factor = Math.pow(10, decimals);
    return Math.round((this + Number.EPSILON) * factor) / factor;
};

/**
 * Extension de Number pour formater le nombre en chaîne de caractères
 * avec séparateur de milliers, selon la locale du navigateur.
 * @returns {string} Le nombre formaté
 */
Number.prototype.toLocaleFormat = function () {
    return this.toLocaleString();
};
