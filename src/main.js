import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log (filterData, renderItems(data), data);

const habitat = document.querySelector('#flor-habitat');
habitat.addEventListener("change",filterData);

// function filterData(data,filterBy, value){
//     if data(prueba){
//         prueba === data;
//     }
// }