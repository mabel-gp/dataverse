export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");
  for(let i=0; i<data.length;i++) {
    const florcita = data[i];
    const flor = document.createElement("li");
    flor.innerHTML = 
      `
      <dl itemscope itemtype = "Flores">
        <dt>Nombre:</dt><dd itemprop="Nombre">${florcita.name}</dd>
        <dt itemprop="Imagen"><img src="${florcita.imageUrl}" /></dt>
        <dt>Descripción Corta:</dt><dd itemprop="Descripción Corta">${florcita.shortDescription}</dd>
        <dt>Descripción:</dt><dd itemprop="Descripción">${florcita.description}</dd>
        <dt>Nombre Científico:</dt><dd itemprop="Nombre Científico">${florcita.facts.nombreCientifico}</dd>
        <dt>Científico Descubridor:</dt><dd itemprop="Científico Descubridor">${florcita.facts.cientificoDescubridor}</dd>
        <dt>Continente de Origen:</dt><dd itemprop="Continente de Origen">${florcita.facts.continenteDeOrigen}</dd>
        <dt>Hábitat:</dt><dd itemprop="Tipo de Hábitat">${florcita.facts.tipoDeHabitat}</dd>
        <dt>Tamaño:</dt><dd itemprop="Tamaño de Flor">${florcita.facts.tamañoDeFlor}</dd>
        ${florcita.id}
      <dl>
      `

    listaDeFlores.appendChild(flor);
  }

  //const contenedorFlores = document.querySelector("#root");
  //contenedorFlores.appendChild(listaDeFlores);
  return listaDeFlores;
};


