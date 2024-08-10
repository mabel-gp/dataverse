export const renderItems = (data) => {
  // console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");
  for(let i=0; i<data.length; i++) {
    const florcita = data[i];
    const flor = document.createElement("li");
    flor.classList.add("características");
    flor.setAttribute("itemtype", "http://schema.org/Flores");
    flor.setAttribute("itemscope", "");

    flor.innerHTML =  
      `
      <dl>
        <dd itemprop="name">${florcita.name}</dd>
        <dt itemprop="imageUrl"><img src="${florcita.imageUrl}" /></dt>
        <dd itemprop="shortDescription">${florcita.shortDescription}</dd>
        <dt>Origen:</dt><dd itemprop="continenteDeOrigen">${florcita.facts.continenteDeOrigen}</dd>
        <dt>Hábitat:</dt><dd itemprop="tipoDeHabitat">${florcita.facts.tipoDeHabitat}</dd>
        <dt>Tamaño:</dt><dd itemprop="tamañoDeFlor">${florcita.facts.tamañoDeFlor}</dd>
      <dl>
      `

    listaDeFlores.appendChild(flor);
  }

  //const contenedorFlores = document.querySelector("#root");
  //contenedorFlores.appendChild(listaDeFlores);
  return listaDeFlores;
};


