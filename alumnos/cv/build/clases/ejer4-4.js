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
// 4.4
(function ejer4d() {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
            this.name = name;
        }
        Animal.prototype.move = function (meters) {
            console.log("".concat(this.name, " se movio ").concat(meters, "m."));
        };
        Animal.prototype.getName = function () {
            return this.name;
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            _super.prototype.move.call(this, meters);
            // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
            // de 5 metros
        };
        Snake.prototype.getName = function () {
            return _super.prototype.getName.call(this);
        };
        return Snake;
    }(Animal));
    var Pony = /** @class */ (function (_super) {
        __extends(Pony, _super);
        function Pony() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Pony.prototype.move = function (meters) {
            if (meters === void 0) { meters = 60; }
            _super.prototype.move.call(this, meters);
            // debe invocar al metodo `move` del padre con un galope predeterminado
            // de 60 metros
        };
        Pony.prototype.getName = function () {
            return _super.prototype.getName.call(this);
        };
        return Pony;
    }(Animal));
    // La clase Animal no debe ser instanciable.
    // Eliminar o comentar una vez que se logra el error deseado.
    //const andrew = new Animal("Andrew el Animal");
    // andrew.move(5);
    var sammy = new Snake("Sammy la serpiente");
    sammy.move();
    console.log(sammy.getName); // (ya no) debe devolver error
    var pokey = new Pony("Pokey el pony");
    pokey.move(34);
    console.log(pokey.getName); // (ya no) debe devolver error
})();
