exports.sum = function (numbers) {
    function addToTotal(n) { total += n };
    var total = 0;
    exports.foreach(addToTotal, numbers);
    return total;
}

exports.foreach = function (action, arr) {
    for (var i = 0; i < arr.length; i++) {
        action(arr[i]);
    }
}

exports.reduce = function (combine, base, arr) {
    var res = base;
    exports.foreach(function (a) {
        res = combine(res, a);
    }, arr);
    return res;
}

function countZeroes(numbers) {
    // 1a hipotese
    return exports.reduce((function (a, b) {
        if (b == 0) { return a + 1; }
    }), 0, numbers);
    // 2a hipotese
    return exports.reduce((function (a, b) {
        return (b == 0 ? a + 1 : a);
    }), 0, numbers);
    // 3a hipotese - parte 2 de 2
    return exports.reduce(count, 0, numbers);
}
// 3a hipotese - parte 1 de 2
function countZero(c, n) {
    return (n == 0 ? c + 1 : c);
}

// implementar funcoes de arrays definidas na norma de ECMAScript

//[2, 4].forEach(console.log)     // 2\n4
//[2, 4].reduce(concat, "")       // ""+"2"+"4"="24"
//[2, 4].reduceRight(concat, "")  // ""+"4"+"2"="42"

//[2, 4].every(isEven)            // true
//[2, 4].some(isOdd)              // false
//[2, 4].map(power(2))            // [4, 16]
//[2, 4].filter(lessThan(3))      // [2]

function and(fnctn) {
    return (function (a, b) {
        return fnctn(a) && fnctn(b);
    });
}

exports.every = function (pred, arr) {
//    return;  // bom desempenho
    return exports.reduce(and(pred), true, arr); // mau desempenho, pois nao interrompe se se encontrar um elemento pred false
}

// exports.some = function

exports.map = function (action, arr) {
    var arr2 = [];
    function copiaElemento(elem) {
        arr2.push(action(elem));    // sem utilizacao de push, seria necessario uma variavel countArr2, ou utilizar arr2.length, para idx;
    }
    exports.foreach(copiaElemento, arr);
    return arr2;
}

exports.negate = function (fn) {
    return function () {
        return !fn.apply(this, arguments);
    }
}
