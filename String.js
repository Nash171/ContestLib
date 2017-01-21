// String

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

String.prototype.countChar = function(c) {
    return (this.match(new RegExp(c, "g")) || []).length;
}

String.prototype.countChars = function() {
    var u = {};
    for (var i = 0; i < this.length; i++) {
        if (!u.hasOwnProperty(this[i])) {
            u[this[i]] = 0;
        }
        u[this[i]]++;
    }
    return u;
}

String.prototype.uniqueChars = function() {
    var u = {},
        a = [];
    for (var i = 0; i < this.length; i++) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
}

