const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let abr = ""
  if (!Array.isArray(members)) return false
  members.forEach(element => {
    if (typeof(element) == "string") {
      element = element.trim();
      abr+=element[0];
    }
  });
  return abr.toUpperCase().split("").sort().join("")
};
