const url = "https://stardustlab-023b.restdb.io/rest/stardustlab?max=22";

const url1 =
  "https://stardustlab-023b.restdb.io/rest/stardustlab?q={%22category%22:%20%22Woman%22,%20%22$distinct%22:%20%22subcategory%22}&h={%22$fields%22:{%22subcategory%22:1}}";

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
    catergoryData(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function catergoryData(data) {
  data.forEach(caterory);
  console.log(caterory);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
}
