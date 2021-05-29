const equiposMayoresEdad = (arrayEquipos, edad) =>
  arrayEquipos.filter((equipo) => equipo.asignado.empleado.edad >= edad);

const equiposProvincia = (arrayEquipos, provincia) =>
  arrayEquipos.filter(
    (equipo) =>
      equipo.asignado.provincia.toLowerCase() === provincia.toLowerCase()
  );

const provincias = (arrayEquipos) => [
  Array.from(new Set(arrayEquipos.map((equipo) => equipo.asignado.provincia))),
];

const puestos = (arrayEquipos) => {};

const edadMedia = (arrayEquipos) => {};

const equiposPorEdad = (arrayEquipos) => {};

const equiposTipo = (arrayEquipos, tipo) =>
  arrayEquipos.filter(
    (equipo) => equipo.tipo.toLowerCase() === tipo.toLowerCase()
  );

const trabajadoresTipo = (arrayEquipos, tipo) => {};

const equiposPorTipo = (arrayEquipos) => {};

const equiposTipoLocalidad = (arrayEquipos, tipo, localidad) => {};

const resumenEquipos = (arrayEquipos) => {};
