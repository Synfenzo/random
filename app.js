"use strict";
//alert("hej")
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var x;
    var y;
    // let summa = a + b;
    //console.log(summa);
    var summan = function (a, b) {
        return a + b;
    };
    (_a = document.querySelector("#summera")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        x = document.querySelector("#x").value;
        y = document.querySelector("#y").value;
        var slump = Math.random() * (100 - 0) + 0;
        var summa = summan(parseInt(x), parseInt(y)) * slump;
        var svar = document.querySelector("#summa").textContent = summa.toString();
        document.querySelector("#slumptal").textContent = slump.toString();
    });
});
