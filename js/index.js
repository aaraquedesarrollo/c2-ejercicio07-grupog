const esIgual = (texto1, texto2) =>
  texto1.toLowerCase() === texto2.toLowerCase();

const equiposMayoresEdad = (arrayEquipos, edad) =>
  arrayEquipos.filter((equipo) => equipo.asignado.empleado.edad >= edad);

const equiposProvincia = (arrayEquipos, provincia) =>
  arrayEquipos.filter((equipo) =>
    esIgual(equipo.asignado.provincia, provincia)
  );

const provincias = (arrayEquipos) => [
  ...new Set(arrayEquipos.map((equipo) => equipo.asignado.provincia)),
];

const puestos = (arrayEquipos) => {};

const edadMedia = (arrayEquipos) => {};

const equiposPorEdad = (arrayEquipos) => {};

const equiposTipo = (arrayEquipos, tipo) =>
  arrayEquipos.filter((equipo) => esIgual(equipo.tipo, tipo));

const trabajadoresTipo = (arrayEquipos, tipo) =>
  arrayEquipos
    .filter((equipo) => esIgual(equipo.tipo, tipo))
    .map((equipo) => equipo.asignado.empleado);

const equiposPorTipo = (arrayEquipos) => {};

const equiposTipoLocalidad = (arrayEquipos, tipo, localidad) => {};

const resumenEquipos = (arrayEquipos) => {};
