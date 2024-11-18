const path = require("path");
const fullNamePath = path.join(__dirname, "utils", "names");
const fullName = require(fullNamePath);

console.log(fullName("Alessandro", "Fiora").surname);
