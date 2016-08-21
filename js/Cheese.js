// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"swiss": 0.90, "american": 1.50, "provolone": 1.00, "no_cheese": 0.00};

  // Augment the original object with another method
  maker.addCheese = function(newCheese) {
    cheesePrices.push(newCheese);
  },
  maker.getCheese = function() {
    return cheesePrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
