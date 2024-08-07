//import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log (filterData, renderItems(data), data);

const arregloDeFlores = document.querySelector("#root");
arregloDeFlores.appendChild(renderItems(data));

