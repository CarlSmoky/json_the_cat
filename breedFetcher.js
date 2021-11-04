const request = require('request');
let data = '';

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    data = JSON.parse(body);
    const breedData = data[0];

    if (!breedData) {
      callback('breed not found', null);
      return;
    }

    const description = breedData.description;
    callback(null, description);
  });
};


module.exports = { fetchBreedDescription };