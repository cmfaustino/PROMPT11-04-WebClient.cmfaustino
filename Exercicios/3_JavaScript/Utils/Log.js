// 1a hipotese
/*
var logText = document.getElementById(log).firstChild;

function log(data) {
    logText.firstChild.nodeValue =
            "[" + new Date().toLocaleTimeString() + "] " +
            data + "\n" +
            logText.nodeValue;
}
*/

// 2a hipotese
/*
(function(w) {
})(window);
*/

// 3a hipotese
log = function () {
    var logText = document.getElementById("log").firstChild;

    return function (data) {
        logText.nodeValue =
            "[" + new Date().toLocaleTimeString() + "] " +
            data + "\n" +
            logText.nodeValue;
    }
}();
