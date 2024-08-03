export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");
  for(let i=0; i<data.length;i++) {
    const florcita = data[i];
    const flor = document.createElement("li");
    flor.innerHTML = 
      `<dt>Nombre:</dt><dd>${florcita.name}</dd>
       <dt>Descripción Corta:</dt><dd>${florcita.shortDescription}</dd>
       <dt>Descripción:</dt><dd>${florcita.description}</dd>
       <img src=${florcita.imageUrl}/>
       <dt>Nombre Científico:</dt>${florcita.facts.nombreCientifico}<dd>
       <dt>Científico Descubridor:</dt>${florcita.facts.cientificoDescubridor}<dd>
       <dt>Continente de Origen:</dt>${florcita.facts.continenteDeOrigen}<dd>
      ${florcita.id}`

    listaDeFlores.appendChild(flor);
  }

  const contenedorFlores = document.querySelector("#root");
  contenedorFlores.appendChild(listaDeFlores);
  // console.log (listaDeFlores);
  return listaDeFlores;
};
// const contenedorFlores = document.querySelector("#root");
// contenedorFlores.appendChild(listaDeFlores);
// const lista = renderItems(data);
// contenedorFlores.innerHTML;   //(listaDeFlores);
// contenedorFlores.querySelector("#contenedor-flores").innerHTML;
// contenedorFlores.innerHTML(listaDeFlores);


