//4.6
//Elimine el error sin cambiar las referencias a ‘Student.school‘
(function ejer4f() {
    var Student = /** @class */ (function () {
        function Student(name) {
            this.name = name;
        }
        Student.prototype.introduction = function () {
            console.log("[Ejercicio 5.6]", "Hola, mi nombre es ".concat(this.name, " y asisto a ").concat(Student.school));
        };
        Student.school = "Harry Herpson High School";
        return Student;
    }());
    var student = new Student("Morty");
    console.log(Student.school);
    student.introduction();
})();
