// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 0.90, "bacon": 1.50, "ham": 1.00, "no_meat": 0.00};

  // Augment the original object with another method
  maker.addMeat = function(newMeat) {
    meatPrices.push(newMeat);
  },
  maker.getMeat = function() {
    return meatPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});

