const urlBase = "https://robust-safe-crafter.glitch.me/";

const addFlatdata = new FormData(addProperty);

const newFlatData = Object.fromEntries(addFlatdata);

console.log(newFlatData);

addProperty.addEventListener("submit", async (e) => {
  e.preventDefault();
  const addFlatdata = new FormData(addProperty);
  const newFlatData = Object.fromEntries(addFlatdata);
  console.log(newFlatData);

  newFlatData.price = Number(newFlatData.price);
  const dataToserver = {
    image: newFlatData.image,
    city: newFlatData.city,
    price: Number(newFlatData.price),
    description: newFlatData.description,
  };

  try {
    const response = await fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToserver),
    });

    const data = await response.json();

    console.log(data);
    location.reload();
    const messege = document.getElementById("messege");
    messege.innerHTML = "Property added";
  } catch (error) {
    console.log(error);
  }
});
