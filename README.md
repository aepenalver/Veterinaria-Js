# Veterinaria Js

Desafío 1 para mostrar conocimientos de desarrollo con Node.Js.

## Tecnologías Empleadas

- JavaScript
- Node JS

## Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (versión 12 o superior).
- Una terminal o consola de comandos.

## Instalación

Instrucciones para instalar y usar la aplicación:

1. Clonar repositorio:

```bash
git clone https://github.com/aepenalver/Veterinaria-Js.git

```

2. Acceder al directorio:

```bash
cd Veterinaria-Js
```

3. Abrir terminal o consola de  comandos

## Uso y Comandos

La app funciona pasando argumentos directamente en la ejecución del archivo index.js.

### 1. Registrar una nueva cita

Para agregar una atención, utiliza el comando ```registrar``` seguido de los datos del animal:

- Nombre del animal
- Edad
- Tipo de animal
- Color del animal
- Enfermedad

Ejemplo:

```bash
node index.js registrar Benito "2 años" perro blanco vomitos
```

_Nota: Si algún argumento contiene espacios (como por ejemplo "2 años"), asegúrate de encerrarlo entre comillas dobles._

### 2. Leer todas las citas

Para visualizar todas las atenciones registradas hasta el momento, utiliza el comando ```leer```.

Ejemplo:
```bash
node index.js leer
```

## Estructura del proyecto

```bash
.
├── index.js            # Entrada de la app
├── citas.json          # Registros
└── operaciones.js      # Funciones
```
