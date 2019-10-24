const request = require('request');
const fs = require('fs')


let url = process.argv[2];
let fileLocation = process.argv[3];


request(`${url}`, (error, response, body) => {

  fs.writeFile(`${fileLocation}`, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ` + body.length +  ` bytes to ${fileLocation}`)
  })

});
