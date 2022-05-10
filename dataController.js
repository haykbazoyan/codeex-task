const path = require("path");
const fs = require("fs");

const basePathToData = path.join(__dirname, "src");

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

exports.getData = async function (request, response) {
  var data = await getJsonData(basePathToData, "data.json");
  setTimeout(function () {
    return response.send(data);
  }, 100);
};
