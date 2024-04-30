function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.div = "Hello";
exports.mul = "World";

module.exports = {
  addFn: add,
  subFn: sub,
};
