"use strict";
(function ejer2d() {
    const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
    const arrStrings = ["abc", "dfj", ["hij", "klm"], "nop"];
    function flatten(array) {
        let flattened = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                flattened.push(...element);
            }
            else {
                flattened.push(element);
            }
        }
        return flattened;
    }
    const flattenedNumbers = flatten(numbers);
    const flattenedStrings = flatten(arrStrings);
    console.log("[Ejercicio 4.3]", flattenedNumbers, flattenedStrings);
    // Añadir anotaciones de tipo (‘any‘ excluido)
    // Inspeccione el tipo de ‘element‘ en diferentes ramas de código
    // Bonificación: convertir ‘flatten‘ en una función genérica
})();
