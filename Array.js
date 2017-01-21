// Array

Array.prototype.sortInc = function() {
    this.sort(function(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
}

Array.prototype.sortDec = function() {
    this.sort(function(a, b) {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
}

Array.prototype.min = function() {
    return Math.min.apply(null, this);
}
