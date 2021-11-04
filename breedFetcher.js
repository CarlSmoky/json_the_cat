const breed = process.argv.slice(2, 3);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
// const url = `https://api.thecapi.com/v1/breeds/search?q=${breed}`;
const request = require('request');
let data = '';
request(url, (error, response, body) => {
  if (error) {
    return console.log('error:', error); // Print the error if one occurred
  }
  data = JSON.parse(body);
  const breedData = data[0];
  if (!breedData) {
    const breedStr = breed.toString();
    console.log(`${breedStr} cannot find in database`);
  } else {
    console.log(breedData.description);
  }
});

