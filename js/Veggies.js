// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {"onion": 0.00, "pickle": 0.00, "lettuce": 0.00, "no_veggies": 0.00};

  // Augment the original object with another method
  maker.addVeggie = function(newveggie) {
    veggiePrices.push(newveggie);
  },
  maker.getVeggie = function() {
    return veggiePrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
