const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newarr = [];
  for (let i = 0; i<arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i == arr.length) break
        i++
        break
      case "--discard-prev":
        if (i == 0 || arr[i-2] == "--discard-next") break
        newarr.pop()
        break
      case "--double-next":
        if (i == arr.length-1 ) break
        newarr.push(arr[i+1])
        break
      case "--double-prev":
        if (i == 0 || arr[i-2] == "--discard-next") break
        newarr.push(newarr[newarr.length-1])
        break
      default:
        newarr.push(arr[i])
    }
  }
  return newarr
};
