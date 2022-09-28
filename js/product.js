const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const advanced = urlParams.get("articletype");

console.log(id);
console.log(advanced);

//const url = "https://stardustlab-023b.restdb.io/rest/stardustlab?max=22";
const url = `https://stardustlab-023b.restdb.io/rest/stardustlab/${id}`;
console.log(url);
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
    handleData(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function handleData(stardustlab) {
  document.querySelector(".sub-art").textContent = advanced.toUpperCase();
  console.log(stardustlab.cupsize.length);
  const template = document.querySelector("template").content;

  if (stardustlab.cupsize.length) {
    //alert("hi");
    stardustlab.cupsize.forEach((El) => {
      const copy = template.cloneNode(true);

      const labelEl = copy.querySelector("label");
      labelEl.textContent = El;
      labelEl.setAttribute("for", `cup-${El}`);

      console.log(El);
      const inputEl = copy.querySelector("input");
      inputEl.value = El;
      inputEl.id = `cup-${El}`;
      inputEl.name = `cupsize`;
      document.querySelector(".cupsize").appendChild(copy);
    });
  } else {
    document.querySelector(".cupsize").remove();
    //alert("vises ikke");
  }
  //console.log(stardustlab.bottomsize.length);

  if (stardustlab.bottomsize.length) {
    stardustlab.bottomsize.forEach((El) => {
      const copy = template.cloneNode(true);

      const labelEl = copy.querySelector("label");
      labelEl.textContent = El;
      labelEl.setAttribute("for", `bottom-${El}`);

      console.log(El);
      const inputEl = copy.querySelector("input");
      inputEl.value = El;
      inputEl.id = `bottom-${El}`;
      inputEl.name = `bottomsize`;
      document.querySelector(".bottomsize").appendChild(copy);
    });
  } else {
    document.querySelector(".bottomsize").remove();
    //alert("vises ikke");
  }
  console.log(stardustlab.shoesize.length);
  if (stardustlab.shoesize.length && stardustlab.shoesize[0]) {
    stardustlab.shoesize.forEach((El) => {
      const copy = template.cloneNode(true);

      const labelEl = copy.querySelector("label");
      labelEl.textContent = El;
      labelEl.setAttribute("for", `shoe-${El}`);

      console.log(El);
      const inputEl = copy.querySelector("input");
      inputEl.value = El;
      inputEl.id = `shoe-${El}`;
      inputEl.name = `shoesize`;
      document.querySelector(".shoesize").appendChild(copy);
    });
    // alert("hej");
    document.querySelector(".cupsize").remove();
    document.querySelector(".bottomsize").remove();
  } else {
    document.querySelector(".shoesize").remove();
    //alert("vises ikke");
  }

  //textContents

  document.querySelector("h3").textContent = stardustlab.productdisplayname;
  // document.querySelector(".price").textContent = stardustlab.price;
  document.querySelector(
    ".price"
  ).textContent = `${stardustlab.price} ${stardustlab.valuta}`;
  document.querySelector(".color").textContent = stardustlab.basecolor;
  document.querySelector(".productimg").src += stardustlab.imglink;
}
