// 1 Crear variables

(function ejerciciosJs() {
  var test;
  const prueba = 'prueba';
  test = 'test';
  // prueba = "prueba2"; no se puede asignar otro valor a una constante
  // prueba = 2;  Por esta misma razón tampoco acepta cambiar el tipo de dato
  test = 'test2';
  console.log(test, prueba);
  test = 35;
  console.log(test);
  // Estructuras de control
  let val = 'a';
  function caseInSwitch(val) {
    let answer = '';
    switch (val) {
      case 'a':
        answer = 'apple';
        return answer;
      case 'b':
        answer = 'bird';
        return answer;
        break;
      case 'c':
        answer = 'cat';
        return answer;
      default:
        answer = 'stuff';
        return answer;
        break;
    }
  }
  console.log(caseInSwitch(val));
  val = 'b';
  console.log(caseInSwitch(val));
  val = 'c';
  console.log(caseInSwitch(val));
  val = 'pepe';
  console.log(caseInSwitch(val));
  // ejer 2
  const arrNum = [];
  for (let i = 0; i < 6; i++) {
    arrNum.push(i);
  }
  console.log(arrNum);
  // ejer 3
  arrNum.length = 0;
  for (let i = 0; i < 5; i++) {
    arrNum.push(i * 2 + 1);
  }
  console.log(arrNum);
  // ejer 4
  arrNum.length = 0;
  for (let i = 4; i > 0; i--) {
    arrNum.push(i * 2);
  }
  console.log(arrNum);
  // 5 Golf

  const names = [
    'Hole-in-one!',
    'Eagle',
    'Birdie',
    'Par',
    'Bogey',
    'Double Bogey',
    'Go Home!',
  ];

  function golfScore(par, strokes) {
    let result = '';
    if (strokes == 1) {
      result = names[0];
    } else if (strokes <= par - 2) {
      result = names[1];
    } else if (strokes == par - 1) {
      result = names[2];
    } else if (strokes == par) {
      result = names[3];
    } else if (strokes == par + 1) {
      result = names[4];
    } else if (strokes == par + 2) {
      result = names[5];
    } else {
      result = names[6];
    }
    return result;
  }

  for (i = 1; i <= 8; i++) {
    console.log(golfScore(5, i));
  }

  // 6
  function sequentialSizes(val) {
    let answer = '';
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = 'low';
        break;
      case 4:
      case 5:
      case 6:
        answer = 'mid';
        break;
      case 7:
      case 8:
      case 9:
        answer = 'high';
        break;
      default:
        break;
    }
    return answer;
  }
  for (i = 1; i < 10; i++) {
    console.log(sequentialSizes(i));
  }

  // 8. Cambie el orden logico en la función de manera que retorne de forma correcta en todos los casos

  function orderMyLogic(val) {
    if (val < 5) {
      return 'Less than 5';
    } else if (val < 10) {
      return 'Less than 10';
    } else {
      return 'Greater than or equal to 10';
    }
  }
  console.log(orderMyLogic(7));
  console.log(orderMyLogic(3));
  console.log(orderMyLogic(10));

  // 9. Convierte la lógica de la siguiente función para usar sentencias else if
  function testElseIf(val) {
    if (val > 10) {
      return 'Greater than 10';
    } else if (val < 5) {
      return 'Smaller than 5';
    } else {
      return 'Between 5 and 10';
    }
  }
  console.log(testElseIf(7));
  console.log(testElseIf(4));
  console.log(testElseIf(11));

  // 10. Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr
  let arreglo = [1, 2, 3, 4, 5, 6];
  function sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sum(arreglo, 3));

  // 11. Susituye la cadena de if/else por un estamento switch
  function chainToSwitch(val) {
    let answer = '';
    switch (val) {
      case 'bob':
        answer = 'Marley';
        break;
      case 42:
        answer = 'The answer';
        break;
      case 1:
        answer = 'There is no #1';
        break;
      case 99:
        answer = 'Missed me by this much';
      case 7:
        answer = 'Ate nine';
        break;
      default:
        break;
    }
    return answer;
  }

  console.log(chainToSwitch(1));

  // 12. Escribe un sentencia switch que pruebe val y establezca answer con las siguientes condiciones

  function caseInSwitch(val) {
    let answer = '';
    switch (val) {
      case 'a':
        answer = 'alpha';
        break;
      case 'b':
        answer = 'beta';
        break;
      case 'c':
        answer = 'gamma';
        break;
      case 'd':
        answer = 'delta';
        break;
      default:
        answer = 'input is not valid';
        break;
    }
    return answer;
  }
  console.log(caseInSwitch('a'));

  //13. Añade los números del 5 al 0 incluido, en orden descendente en array usando un la estructura de repeticion while.
  const array = [];
  let x = 5;
  while (x >= 0) {
    array.push(x);
    x--;
  }
  console.log(array);

  // 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
  // devuelva otro arreglo con los números ordenados.
  let arrayDesordenado = [5, 4, 10, 8, 20];
  function ordenarArray(arr) {
    let arrayOrdenado = arr.sort((a, b) => a - b);
    return arrayOrdenado;
  }

  console.log(ordenarArray(arrayDesordenado));

  // 15. Crear una función que reciba un número entero positivo y devuelva true si dicho número
  // es par o false en caso contrario.
  function esPar(numero) {
    if (numero % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esPar(4), esPar(5));

  // 16. Crear una función que reciba como argumentos dos números y una operación (su nombre
  //     como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números proporcionados
  function calculadora(num1, num2, operador) {
    let result = 0;
    switch (operador) {
      case 'suma':
        result = num1 + num2;
        break;
      case 'resta':
        result = num1 - num2;
        break;
      case 'producto':
      case 'multiplicacion':
        result = num1 * num2;
        break;
      case 'division':
      case 'cociente':
        result = num1 / num2;
        break;
      default:
        result = 'operacion invalida';
        break;
    }
    return result;
  }

  console.log(
    calculadora(2, 2, 'suma'),
    calculadora(2, 2, 'resta'),
    calculadora(2, 2, 'producto'),
    calculadora(2, 2, 'cociente')
  );

  // 17. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
  // por divisor menor que limite. Ambos valores serán siempre enteros positivos.
  function maximoDivisible(divisor, limite) {
    let maxdivis = 0;
    for (let i = limite; i > 0; i--) {
      if (i % divisor == 0) {
        maxdivis = i;
        break;
      }
    }
    return maxdivis;
  }

  console.log(maximoDivisible(4, 35));

  // 18. Dias para altura deseada

  function calcularDiasCrecimiento(
    velocidadCrecimiento,
    velocidadDecrecimiento,
    alturaDeseada
  ) {
    let diasCrecimiento = 0;
    let altura = 0;
    while (altura < alturaDeseada) {
      altura += velocidadCrecimiento - velocidadDecrecimiento;
      diasCrecimiento++;
    }
    return diasCrecimiento;
  }
  console.log(calcularDiasCrecimiento(3, 1, 10));
  // 19
  function perimetroCirculo(r) {
    return 2 * Math.PI * r;
  }

  console.assert(perimetroCirculo(3) === 18.84955592153876);
  console.assert(perimetroCirculo(6) === 37.69911184307752);

  // 20. Crea una función que devuelva el area de un círculo a partir de su radio:
  function areaCirculo(r) {
    return Math.PI * r * r;
  }
  // console.log(areaCirculo(2));

  console.assert(areaCirculo(2) === 12.566370614359172);
  console.assert(areaCirculo(8) === 201.06192982974676);
  // 21
  function hipotenusa(c1, c2) {
    return Math.sqrt(c1 * c1 + c2 * c2);
  }
  // console.log(hipotenusa(1,2));
  console.assert(hipotenusa(1, 2) === 2.23606797749979);

  // 22. lanzarMoneda

  function lanzarMoneda() {
    return Math.random() < 0.5 ? 'Cara' : 'cruz';
  }
  console.log(lanzarMoneda());

  // 23. simular 100 tiradas de 2 dados y contar las veces que entre ambos sumaron 10

  function azarDados() {
    let d1 = 0;
    let d2 = 0;
    let contador = 0;
    for (let i = 0; i < 100; i++) {
      d1 = Math.round(Math.random() * 6);
      d2 = Math.round(Math.random() * 6);
      if (d1 + d2 === 10) {
        contador++;
      }
    }
    return contador;
  }

  console.log(azarDados());

  // 24. Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n veces:
  function repite(str, n) {
    let repiteString = '';
    for (let i = 0; i < n; i++) {
      repiteString += str + ' ';
    }
    return repiteString;
  }

  //console.log(repite("Batman",3));
  console.assert(repite('Batman', 3) === 'Batman Batman Batman ');
  //  25. Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
  function palabraMasLarga(str) {
    let strArray = str.split(' ');
    let palabraMasLarga = '';
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i].length > palabraMasLarga.length) {
        palabraMasLarga = strArray[i];
      }
    }
    return palabraMasLarga;
  }
  console.assert(
    palabraMasLarga('Erase una vez que se era') === 'Erase'
  );

  // 26. Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula
  function primeraMayuscula(str) {
    let strArray = str.split(' ');
    let strArrayCap = strArray.map((element) => {
      return (element =
        element.charAt(0).toUpperCase() + element.slice(1));
    });
    return strArrayCap.join(' ');
  }
  //console.log(primeraMayuscula("En un lugar de la Mancha"));
  console.assert(
    primeraMayuscula('En un lugar de la Mancha') ===
      'En Un Lugar De La Mancha'
  );

  // 27 Crea una función que reciba una cadena y la devuelva en camelCase
  function camelize(str) {
    return str.replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g,
      function (match, index) {
        if (+match === 0) return '';
        return index === 0
          ? match.toLowerCase()
          : match.toUpperCase();
      }
    );
  }
  //console.log(camelize("hola a todos que tal"));
  console.assert(
    camelize('Hola a todos que tal') === 'holaATodosQueTal'
  );

  // 28 Crea una función que reciba un número y devuelva una cadena con formato ordinal inglés.

  function formaToIngles(num) {
    let strNum = num.toString();
    let ultimoDigit = strNum.slice(-1);
    switch (ultimoDigit) {
      case '1':
        strNum += 'st';
        break;
      case '2':
        strNum += 'nd';
        break;
      case '3':
        strNum += 'rd';
        break;

      default:
        strNum += 'th';
        break;
    }
    return strNum;
  }

  console.log(formaToIngles(2024));

  // 29.

  const carrito = {
    productos: [
      {
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
      },
      {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5,
      },
    ],
    get precioTotal() {
      let subtotal = 0;
      let total = 0;
      this.productos.forEach((elemento) => {
        subtotal = elemento.precio * elemento.unidades;
        total += subtotal;
      });
      return total;
    },
  };

  console.log(carrito.precioTotal);

  // 30.
  (function blackJack() {
    let count = 0;
    function cc(card) {
      const highCards = [10, 'J', 'Q', 'K', 'A'];
      if (card >= 2 && card <= 6) {
        count++;
      } else if (highCards.find((item) => item === card)) {
        count--;
      }
      let decision = count > 0 ? 'Bet' : 'hold';
      console.log(count + ' ' + decision);
    }
    cc(2);
    cc(3);
    cc(7);
    cc('K');
    cc('A');
  })();

  // 31

  function sumarNArgumentos(...args) {
    return [...args].reduce((a, b) => a + b, 0);
  }

  console.log(
    sumarNArgumentos(1, 2, 3, 4, 5),
    sumarNArgumentos(1, 2, 3)
  );

  //32
  function sumarSoloNum(...args) {
    let numberArgs = [...args].filter(
      (argument) => typeof argument === 'number'
    );
    return sumarNArgumentos(...numberArgs);
  }

  console.log(sumarSoloNum(1, 'beatriz', 2, 'h1n1', 3));

  // 33
  function countTheArgs(...args) {
    return [...args].length;
  }
  console.log(countTheArgs(1, 'beatriz', 2, 'h1n1', 3));

  // 34

  function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]));

  //35.
  function onlyUniques(...args) {
    return [...new Set([...args])];
  }

  console.log(onlyUniques(1, 1, 3, 4, 4, 5, 'ana', 'ana', 'pedro'));
})();
