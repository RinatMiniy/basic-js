const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0
  matrix.forEach((element) => {
    element.forEach((curelement => {
      if (curelement == "^^") cats++
    }))
  });
  return cats
};
