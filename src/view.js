export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const listaDeFlores = document.createElement("ul");

  for(let i=0; i<data.length;i++) {
    const flor = document.createElement("li");
    flor.innerHTML = data[i];
    listaDeFlores.appendChild(flor);
  }
    

  console.log (listaDeFlores);
};

