"use strict";
(function() {
    function saludar(nombre) {
        console.log('Hola , ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();