const path = require("path");

const peoplePath = path.join(__dirname, "utils", "people");
const people = require(peoplePath);

const person = people();
console.log(person);
