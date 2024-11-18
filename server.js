const path = require("path");
// const peoplePath = path.join(__dirname, "utils", "names");
// const fullName = require(peoplePath);
// const hobbiesPath = path.join(__dirname, "utils", "hobbies");
// const hobbies = require(hobbiesPath);

const peoplePath = path.join(__dirname, "utils", "people");
const people = require(peoplePath);

console.log(people());

// console.log(fullName("Alessandro", "Fiora").surname);
// console.log(hobbies("golf", "basket", "calcio"));
