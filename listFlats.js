const urlBase = "https://robust-safe-crafter.glitch.me/";
const divFlats = document.getElementById("flats");

const flatsData = async () => {
  try {
    const response = await fetch(urlBase);
    const data = await response.json();

    console.log(data);
    createCard(data);
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
