var FOREACH     = Array.prototype.foreach;
var MAP         = Array.prototype.map;
var FILTER      = Array.prototype.filter;
var SOME        = Array.prototype.some;
var EVERY       = Array.prototype.every;
var REDUCE      = Array.prototype.reduce;
var REDUCERIGHT = Array.prototype.reduceRight;
var LASTINDEXOF = Array.prototype.lastindexof;
var INDEXOF     = Array.prototype.indexof;

if (!FOREACH) {
	Array.prototype.foreach = function(fn, context) {
		if (typeof fn === 'function') {
			for (var i = 0, len = this.length; i < len; i++) {
				if (Object.prototype.hasOwnProperty.call(this, i)) {
					fn.call(context ? context : this, this[i], i, this);
				}
			}
		}
	};
}
if (!MAP) {
	Array.prototype.map = function(fn, context) {
		var results = [];
		if (typeof fn === 'function') {
			for (var i = 0, len = this.length; i < len; i++) {
				results[i] = fn.call(context ? context : this, this[i], i, this);
			}
			return results;
		}
	}
}
if (!FILTER) {
	Array.prototype.filter = function(fn, context) {
		var results = [];
		if (typeof fn === 'function') {
			for (var i = 0, len = this.length; i < len; i++) {
				if (fn.call(context ? context : this, this[i], i, this)) {
					results.push(this[i]);
				}
			}
			return results;
		}
	}
}
if (!SOME) {
	Array.prototype.some = function(fn, context) {
		if (typeof fn === 'function') {
			for (var i = 0, len = this.length; i < len; i++) {
				if (fn.call(context ? context : this, this[i], i, this)) {
					return true;
				}
			}
			return false;
		}
	}
}
if (!EVERY) {
	Array.prototype.every = function(fn, context) {
		if (typeof fn === 'function') {
			for (var i = 0, len = this.length; i < len; i++) {
				if (!fn.call(context ? context : this, this[i], i, this)) {
					return false;
				}
			}
			return true;
		}
	}
}
if (!REDUCE) {
	Array.prototype.reduce = function(fn, initValue) {
		var previous = this[0];
		var len = this.length;
		var i = 0;
		var temp;
		if (!initValue) {
			previous = initValue;
		} else {
			i = 1;
		}
		for (; i < len; i++) {
			previous = fn(previous, this[i], i, this);
		}
		return previous;
	}
}
if (!REDUCERIGHT) {
	Array.prototype.reduceRight = function(fn, initValue) {
		var previous = this[len - 1];
		var len = this.length;
		var i = len - 1;
		if (!initValue) {
			previous = initValue;
		} else {
			i = len - 2;
		}
		for (; i > 0; i--) {
			previous = fn(previous, this[i], i, this);
		}
		return previous;
	}
}
if (!INDEXOF) {
	Array.prototype.indexOf = function(v, fromIndex) {
		var start = fromIndex ? fromIndex * 1 : 0;
		for (var i = start, len = this.length; i < len; i++) {
			if (this[i] === v)
				return i;
		}
		return -1;
	}
}
if (!LASTINDEXOF) {
	Array.prototype.lastindexof = function(v, fromIndex) {
		var len = this.length;
		var end = fromIndex ? fromIndex * 1 : len - 1;
		for (var i = end; i > 0; i--) {
			if (this[i] === v)
				return i;
		}
		return -1;
	}
}