const equiposMayoresEdad = (arrayEquipos, edad) =>
  arrayEquipos.filter((equipo) => equipo.asignado.empleado.edad >= edad);

const equiposProvincia = (arrayEquipos, provincia) =>
  arrayEquipos.filter((equipo) => equipo.asignado.provincia === provincia);

const provincias = (arrayEquipos) => {};

const puestos = (arrayEquipos) => {};

const edadMedia = (arrayEquipos) => {};

const equiposPorEdad = (arrayEquipos) => {};

const equiposTipo = (arrayEquipos, tipo) => {};

const trabajadoresTipo = (arrayEquipos, tipo) => {};

const equiposPorTipo = (arrayEquipos) => {};

const equiposTipoLocalidad = (arrayEquipos, tipo, localidad) => {};

const resumenEquipos = (arrayEquipos) => {};
