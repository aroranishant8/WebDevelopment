var  gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);


$(document.getElementById(randomChosenColour)).fadeOut(100).fadeIn(100);




$("div").click(function(){$("div").fadeOut(100).fadeIn(100);});



function playSound(randomChosenColour) {
  var path="sounds/"+randomChosenColour+".mp3";
  var beat = new Audio(path);
  beat.play();
}


function nextSequence()
{
  var randomNumber=Math.random();
  randomNumber=randomNumber*4;
  randomNumber=Math.floor(randomNumber);
  return randomNumber;
}

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
});
