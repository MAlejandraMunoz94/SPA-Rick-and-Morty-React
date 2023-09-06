const axios = require("axios");

function getCharById(res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { name, gender, species, origin, image, status } = response.data;
      const character = { id, name, gender, species, origin, image, status };

      res.writeHead(200, {
        "content-type": "application/json",
      });
      return res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, {
        "content-type": "text/plain",
      });
      return res.end(error.message);
    });
}

module.exports = getCharById;
