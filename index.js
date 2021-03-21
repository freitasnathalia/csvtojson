var fs = require("fs");
var csv = require("csvtojson");

const csvFilePath = "input.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    let data = JSON.stringify(jsonObj, null, 2);
    fs.writeFileSync("output.json", data);
  });
