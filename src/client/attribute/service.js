// Adds to an attribute object from an array of attribute objects and divides by the number of attributes in the array.
function mean(attributes, sum) {
  attributes.forEach(function (attribute) {
    sum.add(attribute);
  });
  return sum.divide(attributes.length);
}

module.exports = {
  mean
};
