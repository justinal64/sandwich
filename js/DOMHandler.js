// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var breadChooser = document.getElementById("bread-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");

// This determines the price of the selectedTopping
function getPrice(objectArray, topping) {
    for(var i in objectArray) {
        if(i === topping) {
            return objectArray[i];
        }
    }
}


/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    // Determine the price of the topping chosen
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += getPrice(SandwichMaker.getBread(), selectedTopping);
    document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);

});

meatChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    // Determine the price of the topping chosen
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += getPrice(SandwichMaker.getMeat(), selectedTopping);
    document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
});

cheeseChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    // Determine the price of the topping chosen
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += getPrice(SandwichMaker.getCheese(), selectedTopping);
    document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
});

condimentChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    // Determine the price of the topping chosen
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += getPrice(SandwichMaker.getCondiment(), selectedTopping);
    document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
});

veggieChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    // Determine the price of the topping chosen
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += getPrice(SandwichMaker.getVeggie(), selectedTopping);
    document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
});

