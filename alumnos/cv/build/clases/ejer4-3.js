//4.3
//Hacer que las propiedades de title y salary estén explícitamente disponibles públicamente
//Reduzca la clase a tres líneas de código manteniendo la funcionalidad
(function ejer4c() {
    var Employee = /** @class */ (function () {
        function Employee(title, salary) {
            this.title = title;
            this.salary = salary;
            this.title = title;
            this.salary = salary;
        }
        return Employee;
    }());
    var employee = new Employee("Ingeniero", 100000);
    console.log("[Ejercicio 5.3]", "El titulo del nuevo empleado es  ".concat(employee.title, " \n  y gana $ ").concat(employee.salary));
})();
