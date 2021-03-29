const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1,
        depth = 0
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = 1 + this.calculateDepth(arr[i])
        if (depth > max) {
          max = depth
        }
      }
    }
    return max
  }
}

