export const renderItems = (data) => {
  // console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");

  data.forEach((dato) => {
    const li = document.createElement("li")
    li.classList.add("caracteristicas");
    li.setAttribute("itemtype", "http://schema.org/Flores");
    li.setAttribute("itemscope", "");

    li.innerHTML =  
      `
      <dl>
        <dd itemprop="name">${dato.name}</dd>
        <dd itemprop="imageUrl"><img src="${dato.imageUrl}"/></dd>
        <dd itemprop="shortDescription">${dato.shortDescription}</dd>
        <dt>Origen:</dt><dd itemprop="continenteDeOrigen">${dato.facts.continenteDeOrigen}</dd>
        <dt>Hábitat:</dt><dd itemprop="tipoDeHabitat">${dato.facts.tipoDeHabitat}</dd>
        <dt>Tamaño:</dt><dd itemprop="tamañoDeFlor">${dato.facts.tamañoDeFlor}</dd>
      <dl>
      `

    listaDeFlores.appendChild(li);
  });

  return listaDeFlores;

};


