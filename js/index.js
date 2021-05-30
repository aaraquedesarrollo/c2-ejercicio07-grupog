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

const puestos = (arrayEquipos) =>
  arrayEquipos.map((equipo) => equipo.asignado.empleado.puesto);

function edadMedia(array) {
  const edadMediaEmpleados = array
    .map((equipos) => equipos.asignado.empleado.edad)
    .reduce(
      (contador, edades, i, array) => edades / array.length + contador,
      0
    );
  return `${edadMediaEmpleados} años de media`;
}
const equiposPorEdad = (arrayEquipos) =>
  arrayEquipos.sort((a, b) => {
    const edadA = a.asignado.empleado.edad;
    const edadB = b.asignado.empleado.edad;
    if (edadA > edadB) {
      return 1;
    }
    if (edadA < edadB) {
      return -1;
    }
    return 0;
  });

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
