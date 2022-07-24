var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//4.5
// Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante
(function ejer4e() {
    var Furniture = /** @class */ (function () {
        function Furniture(manufacturer) {
            if (manufacturer === void 0) { manufacturer = "IKEA"; }
            this.manufacturer = manufacturer;
        }
        return Furniture;
    }());
    var Desk = /** @class */ (function (_super) {
        __extends(Desk, _super);
        function Desk() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Desk.prototype.kind = function () {
            console.log("[Ejercicio 5.5]", "Este es un escritorio hecho por ".concat(this.manufacturer));
        };
        return Desk;
    }(Furniture));
    var Chair = /** @class */ (function (_super) {
        __extends(Chair, _super);
        function Chair() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Chair.prototype.kind = function () {
            console.log("[Ejercicio 5.5]", "Esta es una silla hecha por ".concat(this.manufacturer));
        };
        return Chair;
    }(Furniture));
    var desk = new Desk();
    desk.kind();
    //	desk.manufacturer;  debe devolver error
    var chair = new Chair();
    chair.kind();
    //	chair.manufacturer;  debe devolver error
})();
