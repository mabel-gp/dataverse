import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterDataHabitat, filterDataTamaño, sortData, computeStats} from './dataFunctions.js';


let currentData = data;

const arregloDeFlores = document.querySelector("#root");
arregloDeFlores.appendChild(renderItems(data));


//probando insertar estadistica
const contenedorEstadistica = document.querySelector("#estadistica");
const computeStatsAcuatica = computeStats(data, "tipoDeHabitat", "Acuática");
const computeStatsTerrestre = computeStats(data, "tipoDeHabitat", "Terrestre");
const computeStatsEpifita = computeStats(data, "tipoDeHabitat", "Epífita");

const computeStatsPequeña = computeStats(data, "tamañoDeFlor", "Pequeña");
const computeStatsMediana = computeStats(data, "tamañoDeFlor", "Mediana");
const computeStatsGrande = computeStats(data, "tamañoDeFlor", "Grande");


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


// PROBANDO REDUCIR EN TAMAÑO
// function selectDeTamaño(event){
//   const opcionDeTamaño = event.target.value;
//   const prueba = filterDataTamaño(currentData, "tamañoDeFlor", opcionDeTamaño);
//   const itemsPrueba = renderItems (prueba);
//   arregloDeFlores.replaceChildren(itemsPrueba);
// }


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



//COPIA DE TAMAÑO
// const contenedorTamaño = document.querySelector("#flor-tamaño");
// contenedorTamaño.addEventListener("change", selectDeTamaño);

// function selectDeTamaño(event){
//   const opcionDeTamaño = event.target.value;

//   if (opcionDeTamaño === "pequeñas"){
//     const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Pequeña"));
//     arregloDeFlores.replaceChildren(items);
//   }else if (opcionDeTamaño === "medianas"){
//     const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Mediana"));
//     arregloDeFlores.replaceChildren(items);
//   }else if(opcionDeTamaño === "grandes"){
//     const items = renderItems(filterDataTamaño(data, "tamañoDeFlor", "Grande"));
//     arregloDeFlores.replaceChildren(items);
//   }
// }


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
  arregloDeFlores.replaceChildren(limpiar);
});

