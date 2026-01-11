const fs = require('fs');

const leerCitas = () => {
  console.log(JSON.parse(fs.readFileSync('citas.json', 'utf-8')));
};

const registrarCita = (nombre, edad, animal, color, enfermedad) => {
  citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  citas.push(nuevaCita);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
};

module.exports = { registrarCita, leerCitas };
