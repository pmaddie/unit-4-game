// create the target number or the number you are tryin to add up to.
var targetNumber = 30;  
  

$("#number-to-guess").text(targetNumber)
  

// created a variable for the counter.
var counter = 0;  


var numberOptions = [3, 4, 10, 11];
for (var i = 0; i < numberOptions.length; i++) {

var imageCrystal = $("<img>");

// var increment = numberOptions[Math.round(Math.random())];


        // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);



  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-image").on("click", function() {




    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


        // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
 counter += crystalValue;

    // We'll then increment the counter each time by the randomly selected number.
    // counter += increment;
    // alert/log the number totaled after each click.
   alert("Your new score " + counter + " !");



  if (counter === targetNumber) {

    // If the numbers match we'll celebrate the user's win.
    alert("You win!");
  }
 // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
 else if (counter >= targetNumber) {

    // Then they are alerted with a loss.
    alert("You lose!!");
  }
});
};