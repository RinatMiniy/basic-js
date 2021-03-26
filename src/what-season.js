const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return "Unable to determine the time of year!"
  try {
    date.getTime()
  }
  catch {
    throw new Error()
  }
  if (typeof(date) != "object") {
    throw new Error()
  }

  let months = date.getMonth()
  if (months < 2) return "winter"
  if (months < 5) return "spring"
  if (months < 8) return "summer"
  if (months < 11) return "fall"
  return "winter"
};
