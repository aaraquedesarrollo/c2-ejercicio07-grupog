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

const equiposPorTipo = (arrayEquipos) => [
  ...new Set(
    ...arrayEquipos.map((equipo) => [
      {
        tipo: "Portátil",
        equipos: arrayEquipos.filter((equipo) =>
          esIgual(equipo.tipo, "portátil")
        ),
      },
      {
        tipo: "Sobremesa",
        equipos: arrayEquipos.filter((equipo) =>
          esIgual(equipo.tipo, "sobremesa")
        ),
      },
    ])
  ),
];

const equiposTipoLocalidad = (arrayEquipos, tipo, localidad) =>
  arrayEquipos.filter(
    (equipo) =>
      esIgual(equipo.tipo, tipo) &&
      esIgual(equipo.asignado.poblacion, localidad)
  );

const resumenEquipos = (arrayEquipos) =>
  arrayEquipos.map((equipo) => [
    (id = equipo.id),
    (poblacion = equipo.asignado.poblacion),
    (provincia = equipo.asignado.provincia),
  ]);
