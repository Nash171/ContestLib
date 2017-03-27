// GCD

function gcd(a, b) {
    var t;
    while (b) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function gcdArray(a) {
    var g = a[0];
    for (var i = 1; i < a.length; i++) {
        g = gcd(g, a[i]);
    }
    return g;
}

module.exports = {
    gcd: gcd,
    gcdArray: gcdArray
};
