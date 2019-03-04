// create the target number or the number you are tryin to add up to.

// created a variable for the counter.
var userCounter = 0;  
var wins = 0;
var losses = 0;
var numberOptions = [3, 4, 2, 7];
var imageCrystal = $(".crystal-image")


// create randomized target number // 
var targetNumber = Math.floor(Math.random() * 150);
    console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);

// assigns random number to each image
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


        // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
 userCounter += crystalValue;
 console.log(userCounter);



    // We'll then increment the counter each time by the randomly selected number.
    // counter += increment;
    // alert/log the number totaled after each click.
  //  alert("Your new score " + userCounter + " !");

  

  if (userCounter === targetNumber) {
    wins++;
  
    console.log(wins)
    // generate new random #'s
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        
    // // If the numbers match we'll celebrate the user's win.
    // alert("You win!");
  }
 // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (userCounter > targetNumber) {
        losses++;
        console.log(losses)
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 6)
 }
  
});



