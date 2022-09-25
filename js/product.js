const url = "https://stardustlab-023b.restdb.io/rest/stardustlab";

const options = {
  headers: {
    "x-apikey": "632c555dbf647d0a5c19864e",
  },
};

//the api key:

//632c555dbf647d0a5c19864e

fetch(url, options)
  .then((respons) => {
    if (!respons.ok) {
      throw Error(response.statusText);
    }
    return respons.json();
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });
