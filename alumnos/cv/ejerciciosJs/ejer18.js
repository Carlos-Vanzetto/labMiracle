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
