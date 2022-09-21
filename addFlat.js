const urlBase = "https://robust-safe-crafter.glitch.me/";

const addFlatdata = new FormData(addProperty);

const newFlatData = Object.fromEntries(addFlatdata);

console.log(newFlatData);

addProperty.addEventListener("submit", async (e) => {
  e.preventDefault();
  const addFlatdata = new FormData(addProperty);
  console.log(addFlatdata);
  const newFlatData = Object.fromEntries(addFlatdata);
  console.log(newFlatData);
  newFlatData.price = Number(newFlatData.price);
  const last = newFlatData.description;
  const third = newFlatData.price;
  const second = newFlatData.city;
  //change object sequince

  console.log(newFlatData);
  try {
    const response = await fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFlatData),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// const addNewFalt = async () => {
//
// };

// addNewFalt();
