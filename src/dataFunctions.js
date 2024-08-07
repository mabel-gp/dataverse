// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  
  const filtrarFlores = data.filter((florecita) =>{
    return florecita.facts.tipoDeHabitat === 'Acuática';
  });
  console.log(filtrarFlores);
};

// export const anotherExample = () => {
//   return [];
// };
