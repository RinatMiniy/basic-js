const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
   
    return recursive(arr)
    function recursive (arr) {
      let max = 1,
      cul = 1
      for (let i =0; i<arr.length; i++) {
        if (typeof(arr[i]) == "object") {
          cul = 1 + recursive(arr[i])
        }
        else continue
      }
      if (cul>max) max = cul
      cul = 1
      return max
    }
       
  }
 
};

