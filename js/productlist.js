const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");
const sub = urlParams.get("subcategory");

let url = "https://stardustlab-023b.restdb.io/rest/stardustlab?max=22";

if (cat) {
  url += `&q={"category": "${cat}", "subcategory": "${sub}"}`;
}
console.log(url);
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
  document.querySelector(".sub-cat").textContent = sub.toUpperCase();
  stardustlab.forEach((product) => {
    //console.log(product);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector(
      ".item"
    ).textContent = `${product.articletype} | ${product.productdisplayname}`;
    clone.querySelector(
      ".priceItem"
    ).textContent = `${product.price} ${product.valuta}`;
    clone.querySelector(".color").textContent = product.basecolor;

    clone.querySelector(".productlistimg").src += product.imglink;

    const aEl = clone.querySelector("a");
    aEl.href += product._id + "&articletype=" + sub;

    const parent = document.querySelector("#productlistpage");
    parent.appendChild(clone);
  });
}
