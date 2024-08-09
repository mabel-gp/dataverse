// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterDataHabitat = (data, filterBy, value) => {
  return data.filter((filtradasPorHabitat) => filtradasPorHabitat.facts[filterBy] === value)
};

export const filterDataTamaño = (data, filterBy, value) => {
  return data.filter((filtradasPorTamaño) => filtradasPorTamaño.facts[filterBy] === value)  
  
};

