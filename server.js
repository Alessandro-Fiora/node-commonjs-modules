const path = require("path");
const fullNamePath = path.join(__dirname, "utils", "names");
const fullName = require(fullNamePath);
const hobbiesPath = path.join(__dirname, "utils", "hobbies");
const hobbies = require(hobbiesPath);

console.log(fullName("Alessandro", "Fiora").surname);
console.log(hobbies("golf", "basket", "calcio"));
