(function ejer4a() {
    var MC = /** @class */ (function () {
        function MC() {
        }
        MC.prototype.greet = function (event) {
            if (event === void 0) { event = "party"; }
            return "Bienvenido al ".concat(event);
        };
        return MC;
    }());
    var mc = new MC();
    console.log("ejercicios 4-1", mc.greet("espectaculo"));
})();
