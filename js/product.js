const url = "https://stardustlab-023b.restdb.io/rest/stardustlab";

const options = {
  headers: {
    "x-apikey": "632c555dbf647d0a5c19864e",
  },
};

//the api key:

//632c555dbf647d0a5c19864e

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleData(stardustlab) {
  stardustlab.forEach((product) => {
    console.log(product);

    const template = document.querySelector("#producttemp").content;

    const clone = template.cloneNode(true);
    clone.querySelector(".price").textContent = product.price;

    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
