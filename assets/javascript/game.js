// created a variable for the counter.
var userCounter = 0;  
var wins = 0;
var losses = 0;
// create randomized target number // 
var targetNumber = Math.floor(Math.random() * 150);
    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);


// assigns random number to each image
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        

   //reset://
function resetNumberToMatch() {
    // userCounter = 0;
    targetNumber = Math.floor(Math.random() * 150);    
    
  }
  
  
  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue)


        // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
 userCounter += crystalValue;
 $("#usercounter").text(userCounter)
 console.log(userCounter);



// if the users counter exactly equals the target number, then the score for "wins" it will go up by one. //
  if (userCounter === targetNumber) {
    wins++;
    
    resetNumberToMatch();
    userCounter=0;
    targetNumber = Math.floor(Math.random() * 150);
    $("#number-to-guess").text(targetNumber);  
    
  $("#wins").text(wins)
    console.log(wins)
    // generate new random #'s
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        

  }
 // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (userCounter > targetNumber) {
        losses++;
        
        resetNumberToMatch();
        userCounter=0;
        targetNumber = Math.floor(Math.random() * 150);    
        $("#number-to-guess").text(targetNumber);

        $("#losses").text(losses)
        console.log(losses)
        $(".crystal-image1").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image2").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image3").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        $(".crystal-image4").attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
 }
  
 

});



