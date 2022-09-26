const url = "https://stardustlab-023b.restdb.io/rest/stardustlab?max=22";

const options = {
  headers: {
    "x-apikey": "632c555dbf647d0a5c19864e",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    handleData(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

//   .then((res) => res.json())
//   .then((data) => handleData(data));

function handleData(stardustlab) {
  stardustlab.forEach((product) => {
    //console.log(product);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(
      ".item"
    ).textContent = `${product.articletype} | ${product.productdisplayname}`;
    clone.querySelector(".priceItem").textContent = product.price;

    const aEl = clone.querySelector("a");
    aEl.href += product._id;

    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
