import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterDataHabitat, filterDataTamaño, sortData, computeStats, computeStatsPrueba} from './dataFunctions.js';


let currentData = data;

const arregloDeFlores = document.querySelector("#root");
arregloDeFlores.appendChild(renderItems(data));


//VARIABLES conectadas con dataFunctions para mostrar el total de flores por cada filtro
const contenedorEstadistica = document.querySelector("#estadistica");

const computeStatsAcuatica = computeStats(data, "tipoDeHabitat", "Acuática");
const computeStatsTerrestre = computeStats(data, "tipoDeHabitat", "Terrestre");
const computeStatsEpifita = computeStats(data, "tipoDeHabitat", "Epífita");

const computeStatsPequeña = computeStats(data, "tamañoDeFlor", "Pequeña");
const computeStatsMediana = computeStats(data, "tamañoDeFlor", "Mediana");
const computeStatsGrande = computeStats(data, "tamañoDeFlor", "Grande");

const computeStatsPruebaDos = computeStatsPrueba(data, "continenteDeOrigen", "Asia");
contenedorEstadistica.innerHTML = computeStatsPruebaDos + " % provienen de Asia";


//HÁBITAT
function selectDeHabitat(event){
  const opcionDeHabitat= event.target.value;

  if (opcionDeHabitat === "acuáticas"){
    currentData = filterDataHabitat(data, "tipoDeHabitat", "Acuática")
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores acuáticas es " + computeStatsAcuatica;
  }else if (opcionDeHabitat === "terrestres"){
    currentData = filterDataHabitat(data, "tipoDeHabitat", "Terrestre")
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores terrestres es " + computeStatsTerrestre;
  }else if(opcionDeHabitat === "epífitas"){
    currentData = filterDataHabitat(data, "tipoDeHabitat", "Epífita")
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores epífitas es " + computeStatsEpifita;
  }
}

const contenedorHabitat = document.querySelector("#flor-habitat");
contenedorHabitat.addEventListener("change", selectDeHabitat);


//TAMAÑO
function selectDeTamaño(event){
  const opcionDeTamaño = event.target.value;

  if (opcionDeTamaño === "pequeñas"){
    currentData = filterDataTamaño(data, "tamañoDeFlor", "Pequeña");
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores pequeñas es " + computeStatsPequeña;
  }else if (opcionDeTamaño === "medianas"){
    currentData = filterDataTamaño(data, "tamañoDeFlor", "Mediana");
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores medianas es " + computeStatsMediana;
  }else if(opcionDeTamaño === "grandes"){
    currentData = filterDataTamaño(data, "tamañoDeFlor", "Grande");
    const items = renderItems(currentData);
    arregloDeFlores.replaceChildren(items);
    contenedorEstadistica.innerHTML = "El total de flores grandes es " + computeStatsGrande;
  }
}

const contenedorTamaño = document.querySelector("#flor-tamaño");
contenedorTamaño.addEventListener("change", selectDeTamaño);


//ORDENAR
function selectDeOrdenar(event){
  const opcionDeOrden = event.target.value;
  const sortedData = sortData(currentData, opcionDeOrden);
  const items = renderItems(sortedData);
  arregloDeFlores.replaceChildren(items);
}

const contenedorOrdenar = document.querySelector("#ordenar-flor");
contenedorOrdenar.addEventListener("change", selectDeOrdenar);


//BOTÓN
const dataOriginal = data;
const botonRecargar = document.querySelector('[data-testid = "button-clear"]');
botonRecargar.addEventListener("click", () => {
  const limpiar = renderItems(dataOriginal) //volver a renderizar items con la data inicial
  contenedorEstadistica.innerHTML = "";
  contenedorHabitat.value = "elegir-por-habitat";
  contenedorTamaño.value = "elegir-por-tamaño";
  contenedorOrdenar.value = "elegir-por-orden";
  arregloDeFlores.replaceChildren(limpiar);
});

