const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let fin = "",
  sep = options.separator == undefined ? "+" : options.separator,
  addsep = options.additionSeparator == undefined ? "|" : options.additionSeparator

  if (options.repeatTimes == undefined) return str+options.addition
  
  for (let i = 0; i < options.repeatTimes; i++) {
    fin += str
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (options.additionRepeatTimes - j == 1) {
        fin += options.addition 
        continue
      }
      fin += options.addition + addsep
    }
    fin += sep
  }
  return fin.slice(0, fin.length - sep.length )
};