const fs = require('fs');
const { leerCitas, registrarCita } = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

const message = `
Has ingresado una opción inválida

Por ingresa una opción válida, consulta el README.md para mejor orientación respectoa los argumentos válidos.
`;

if (operacion === 'registrar') {
  registrarCita(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  leerCitas();
} else {
  console.log(message);
}
