Array.prototype.swap = function (index_A, index_B) {
	let temp = this[index_A];
	this[index_A] = this[index_B];
	this[index_B] = temp;
};

/**
 *
 * @returns {Array}
 */

Array.prototype.swap2Values = function () {
	if (this.length != 2) {
		console.warn('swap2Values : array length is not 2');
		return;
	}

	let temp = this[0];
	this[0] = this[1];
	this[1] = temp;
};

/** extension du type Position venant de geoJSON */
Array.prototype.swapCoordonatesValues = function () {
	if (this.length != 2) {
		console.warn('swap2Values : array length is not 2');
		return;
	}
	let temp = this[0];
	this[0] = this[1];
	this[1] = temp;
};

Array.prototype.removeDuplicates = function () {
	return this.filter((value, index, self) => self.indexOf(value) === index);
};
