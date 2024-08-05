export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");
  for(let i=0; i<data.length;i++) {
    const florcita = data[i];
    const flor = document.createElement("li");
    flor.innerHTML = 
      `
      <dl>
        <dt>Nombre:</dt><dd>${florcita.name}</dd>
        <dt>Descripción Corta:</dt><dd>${florcita.shortDescription}</dd>
        <dt>Descripción:</dt><dd>${florcita.description}</dd>
        <dt><img src="${florcita.imageUrl}" /></dt>
        <dt>Nombre Científico:</dt><dd>${florcita.facts.nombreCientifico}</dd>
        <dt>Científico Descubridor:</dt><dd>${florcita.facts.cientificoDescubridor}</dd>
        <dt>Continente de Origen:</dt><dd>${florcita.facts.continenteDeOrigen}</dd>
          ${florcita.id}
      <dl>
      `

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


