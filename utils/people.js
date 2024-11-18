const path = require("path");

const fullNamePath = path.join(__dirname, "names");
const hobbiesPath = path.join(__dirname, "hobbies");

const fullName = require(fullNamePath);
const hobbies = require(hobbiesPath);

const people = () => ({
  firstName: fullName("Alessandro", "Fiora").name,
  lastName: fullName("Alessandro", "Fiora").surname,
  hobbies: hobbies("golf", "basket", "calcio").hobbies,
});

module.exports = people;
