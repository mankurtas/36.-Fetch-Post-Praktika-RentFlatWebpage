const urlBase = "https://robust-safe-crafter.glitch.me/";
const divFlats = document.getElementById("flats");
const vilnius = document.getElementById("vilnius");
const kaunas = document.getElementById("kaunas");
const klaipeda = document.getElementById("klaipeda");

const buttons = document.querySelectorAll("button");

let flatsList = [];

const flatsData = async () => {
  try {
    const response = await fetch(urlBase);
    const data = await response.json();
    flatsList = data;
    console.log(data);
    createCard(data);
    console.dir(divFlats);
  } catch (error) {
    console.log(error);
  }
};
flatsData();

const createCard = (info) => {
  info.forEach((element) => {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", element.image);

    const divContainer = document.createElement("div");
    div.setAttribute("class", "cardContainer");

    const price = document.createElement("h1");
    price.innerHTML = `&euro;${element.price}`;

    const city = document.createElement("p");
    city.innerHTML = element.city;

    const description = document.createElement("p");
    description.innerHTML = element.description;

    divContainer.append(price, city, description);

    div.append(img, divContainer);

    divFlats.append(div);
  });
};

// Jei atgal nebepazymetas fitlars listinti visus

vilnius.addEventListener("click", (e) => {
  e.preventDefault();
  divFlats.innerHTML = "";

  const vilnius = flatsList.filter((element) => element.city == "Vilnius");

  createCard(vilnius);
});
kaunas.addEventListener("click", (e) => {
  e.preventDefault();
  divFlats.innerHTML = "";

  const kaunas = flatsList.filter((element) => element.city == "Kaunas");

  createCard(kaunas);
});
klaipeda.addEventListener("click", (e) => {
  e.preventDefault();
  divFlats.innerHTML = "";

  const klaipeda = flatsList.filter((element) => element.city == "Klaipeda");

  createCard(klaipeda);
});

buttons.addEventListener("blur", (e) => {
  e.preventDefault();
  divFlats.innerHTML = "";
  createCard(flatsList);
});
