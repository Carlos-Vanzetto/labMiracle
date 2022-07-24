(function ejer2d() {
    var numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
    var arrStrings = ["abc", "dfj", ["hij", "klm"], "nop"];
    function flatten(array) {
        var flattened = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (Array.isArray(element)) {
                flattened.push.apply(flattened, element);
            }
            else {
                flattened.push(element);
            }
        }
        return flattened;
    }
    var flattenedNumbers = flatten(numbers);
    var flattenedStrings = flatten(arrStrings);
    console.log('[Ejercicio 4.3]', flattenedNumbers, flattenedStrings);
    // Añadir anotaciones de tipo (‘any‘ excluido)
    // Inspeccione el tipo de ‘element‘ en diferentes ramas de código
    // Bonificación: convertir ‘flatten‘ en una función genérica
})();
