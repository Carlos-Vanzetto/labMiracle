"use strict";
(function ejer1f() {
    const elementoInventario = ["tuerca", 11];
    const [nombre, cantidad] = elementoInventario;
    const mensaje = agregarInventario(nombre, cantidad);
    console.log("[Ejercicio 1.6]", mensaje);
    function agregarInventario(nombre, cantidad) {
        return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
    }
})();
