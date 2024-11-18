const path = require("path");

const namesPath = path.join(__dirname, "names");
const hobbiesPath = path.join(__dirname, "hobbies");

const names = require(namesPath);
const hobbies = require(hobbiesPath);

const people = () => ({
  firstName: names("Alessandro", "Fiora").name,
  lastName: names("Alessandro", "Fiora").surname,
  hobbies: hobbies("climbing", "skiing", "mountaineering").hobbies,
});

module.exports = people;
