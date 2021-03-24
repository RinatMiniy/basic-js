const CustomError = require("../extensions/custom-error");

const chainMaker = {
  "chain": [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
      if (value === undefined) value = " "
      this.chain.push(String(value))
      return chainMaker
  },
  removeLink(position) {
      if (typeof(position) != "number" || position < 0 || position > this.chain.length){
          this.chain= []
          throw new Error()
      }
      this.chain.splice(Number(position) - 1, 1)
      return chainMaker
  },
  reverseChain() {
      this.chain.reverse()
      return chainMaker
  },
  finishChain() {
      let fin = this.chain.join(" )~~( ")
      this.chain = []
      return "( " + fin + " )"
  }
};

module.exports = chainMaker;
