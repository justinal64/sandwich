// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {"ketchup": 0.00, "mustard": 0.00, "mayo": 0.00, "no_condiments": 0.00};

  // Augment the original object with another method
  maker.addCondiment = function(newcondiment) {
    condimentPrices.push(newcondiment);
  },
  maker.getCondiment = function() {
    return condimentPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
