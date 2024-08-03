export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const listaDeFlores = document.createElement("ul");
  for(let i=0; i<data.length;i++) {
    const flor = document.createElement("li");
    flor.innerHTML = data[i].name;
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


