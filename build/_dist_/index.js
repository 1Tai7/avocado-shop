/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNote = document.querySelector("#app");
const formaPrice = (price) => {
    const newPrice=new window.Intl.NumberFormat("en-EN",{style:"currency", currency: "USD"}).format(price)
    return newPrice;
};
//web api
//contectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  //procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> data -> renderisar info browser
  .then((responseJson) => {
    responseJson.data.forEach((item) => {
      console.log(item.name);
    });
  });

const fecthData = async () => {
  const respuesta = await window.fetch(`${baseUrl}/api/avo`);
  const body = await respuesta.json();
  const todosLosItems = [];
  body.data.forEach((item) => {
    //crear imagen
    const imagen = document.createElement("img");
    imagen.src = `${baseUrl}${item.image}`;
    imagen.className = "w-32 rounded-full col-span-1";
    //crear titulo
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "text-xl text-lime-600  ";
    //crear precio
    const price = document.createElement("h5");
    price.textContent = formaPrice(item.price);
    price.className = "";

    const priceAndTitle = document.createElement("div");
    priceAndTitle.className =
      "grid content-center md:text-left col-span-2";
    priceAndTitle.appendChild(title);
    priceAndTitle.appendChild(price);
    
    
    const container = document.createElement("div");
    container.append(imagen, priceAndTitle);
    container.className =
      " rounded-lg bg-white shadow-lg grid-flow-col grid grid-cols-3 gap-3";

    appNote.className = "grid grid-cols-2 gap-2";

    todosLosItems.push(container);
  });
  appNote.append(...todosLosItems);
  console.log(todosLosItems);
};
fecthData();
