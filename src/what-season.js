const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) != "object") {
    throw new Error()
  }
  return null
  let months = date.getMonth()
  if (months < 2) return "winter"
  if (months < 5) return "spring"
  if (months < 8) return "summer"
  if (months < 11) return "fall"
  return "winter"
};
