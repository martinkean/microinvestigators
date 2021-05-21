const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching WordPress samples data...");

  return fetch("https://design.ac.nz/student/2021/microinvestigators/wp-json/wp/v2/sample/")
    .then((res) => res.json())
    .then((json) => json);
};  