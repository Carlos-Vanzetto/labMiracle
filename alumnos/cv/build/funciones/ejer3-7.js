(function ejer3g() {
    var numberCollection = [];
    var stringCollection = [];
    var booleanCollection = [];
    var arrayCollection = [];
    function pushToCollection(item, collection) {
        if (collection === void 0) { collection = []; }
        collection.push(item);
        return collection;
    }
    // Anadir algunas cosas a las colecciones
    pushToCollection(false, booleanCollection);
    pushToCollection('hi', stringCollection);
    pushToCollection([], arrayCollection);
    pushToCollection(1, numberCollection);
    pushToCollection(2, numberCollection);
    pushToCollection(3, numberCollection);
    var incrementedByTwo = numberCollection.map(function (num) { return num + 2; });
    console.log('[Ejercicio 3.7]', "[".concat(incrementedByTwo, "] debe ser igual a [3,4,5]"));
})();
