const breed = process.argv.slice(2, 3);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
const request = require('request');
let data = '';
request(url, function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  getDataFromJSON(body);
});

const getDataFromJSON = (body) => {
  data = JSON.parse(body);
  if (data.length === 0) {
    const breedStr = breed.toString();
    console.log(`${breedStr} cannot find in database`);
  } else {
    console.log(data[0].description);
  }
};
