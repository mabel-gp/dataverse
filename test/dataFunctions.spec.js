import { filterDataHabitat, filterDataTamaño, sortData, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('filterDataHabitat()', () => {
  it('debería devolver Acuática', () => {
    const acuatica = filterDataHabitat(fakeData,"tipoDeHabitat", "Acuática")
    expect(acuatica.length).toBe(1);
  });
  it('debería devolver Terrestre', () => {
    const terrestre = filterDataHabitat(fakeData,"tipoDeHabitat", "Terrestre")
    expect(terrestre.length).toBe(1);
  });
  it('debería devolver Epífita', () => {
    const epifita = filterDataHabitat(fakeData,"tipoDeHabitat", "Epífita")
    expect(epifita.length).toBe(1);
  });
});


describe('filterDataTamaño', () => {

  it('debería devolver Grande', () => {
    const grande = filterDataTamaño(fakeData, "tamañoDeFlor", "Grande")
    expect(grande.length).toBe(1);
  });
  it('debería devolver Mediana', () => {
    const mediana = filterDataTamaño(fakeData, "tamañoDeFlor", "Mediana")
    expect(mediana.length).toBe(1);
  });
  it('debería devolver Pequeña', () =>{
    const pequeña = filterDataTamaño(fakeData, "tamañoDeFlor", "Pequeña")
    expect(pequeña.length).toBe(1);
  })
});


describe('sortData', () => {

  it('debería devolver A-Z', () => {
    const ascendente = sortData(fakeData, "asc")
    expect(ascendente.length).toBe(3);
  });
  it('debería devolver Z-A', () => {
    const descendente = sortData(fakeData, "des")
    expect(descendente.length).toBe(3);
  });
});


describe('computeStats', () => {
  it('debería mostrar el total de Acuáticas',() => {
    const estadisticaAcuatica = computeStats(fakeData, "tipoDeHabitat", "Acuática")
    expect(estadisticaAcuatica).toBe(1);
  });
  it('debería mostrar el total de Terrestres',() => {
    const estadisticaTerrestre = computeStats(fakeData, "tipoDeHabitat", "Terrestre")
    expect(estadisticaTerrestre).toBe(1);
  });
  it('debería mostrar el total de Epífitas',() => {
    const estadisticaEpifita = computeStats(fakeData, "tipoDeHabitat", "Epífita")
    expect(estadisticaEpifita).toBe(1);
  });
  it('debería mostrar el total de flores Grandes',() => {
    const estadisticaGrande = computeStats(fakeData, "tamañoDeFlor", "Grande")
    expect(estadisticaGrande).toBe(1);
  });
  it('debería mostrar el total de flores Medianas',() => {
    const estadisticaMediana = computeStats(fakeData, "tamañoDeFlor", "Mediana")
    expect(estadisticaMediana).toBe(1);
  });
  it('debería mostrar el total de flores Pequeñas',() => {
    const estadisticaPequeña = computeStats(fakeData, "tamañoDeFlor", "Pequeña")
    expect(estadisticaPequeña).toBe(1);
  });
});