
export const filterDataHabitat = (data, filterBy, value) => {
  const filtradasPorHabitat = data.filter((florHabitat) => {
    if(value === "Acuática"){
      return florHabitat.facts[filterBy] === "Acuática";
    }else if(value === "Terrestre"){
      return florHabitat.facts[filterBy] === "Terrestre";
    }else if(value === "Epífita"){
      return florHabitat.facts[filterBy] === "Epífita";
    }else{
      return 'No hay datos para mostrar';
    }
  });
  return filtradasPorHabitat;
};


export const filterDataTamaño = (data, filterBy, value) => {
  const filtradasPorTamaño = data.filter((florTamaño) => {
    if(value === "Pequeña"){
      return florTamaño.facts[filterBy] === "Pequeña";
    }else if(value === "Mediana"){
      return florTamaño.facts[filterBy] === "Mediana";
    }else if(value === "Grande"){
      return florTamaño.facts[filterBy] === "Grande";
    }else{
      return 'No hay datos para mostrar';
    }
  });
  return filtradasPorTamaño;
};


export const sortData = (data, sortOrder) =>{

  return data.sort((a, b) => {
    if(sortOrder === "asc"){
      if(a.name > b.name){
        return 1;
      }else{
        return -1;
      }
    }else if(sortOrder === "desc"){
      if(a.name < b.name){
        return 1;
      }else{
        return -1;
      }
    }
  });
};


export const computeStats = (data, dataBy, tipo) =>{
  const estadisticas = data.reduce((contador, elemento) => {
    if(elemento.facts[dataBy] === tipo){
      return contador +1;
    }else{
      return contador;
    }
  },0);
  return estadisticas;
} 


export const computeStatsPorcentaje = (data, dataBy, tipo) => {
  const datosDeContinentes = data.map((datos) => {
    const continentes = datos.facts[dataBy].split(/[\s]+/);
    return continentes.includes(tipo);
  })
  const resultado = datosDeContinentes.reduce((contador, elemento) => contador + elemento, 0);
  const porcentaje = (resultado / data.length)*100;
  return parseFloat(porcentaje.toFixed(1));
}
