import { filterDataHabitat, filterDataTamaño} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('filterDataHabitat()', () => {
  it('debería devolver Acuática', () => {
    const prueba = filterDataHabitat(fakeData,"tipoDeHabitat", "Acuática")
    expect(prueba.tipoDeHabitat).toEqual("Acuática");
  });
});




describe('filterDataTamaño', () => {

  it('debería devolver Grande', () => {
    expect(filterDataTamaño(fakeData, "tamañoDeFlor", "Grande")).toEqual("Grande");
  });
});
