
$(document).ready(function(){
  $("h1").css("color","green");
  $("h1").addClass("backgroundBlue");
  $("button").text("Dont click mee.");
  $("button").html("<br/>Hey<br/>")
});
//attribute LinkfortestingAttributeChange

$(document).ready(function(){

  $("a").attr("href","https://www.yahoo.com");//change from google to yahoo

  $("button").click(function(){
    $("h1").css("color","purple");});


    $("input").keypress(function(event){
      console.log(event);
    });

    $("h1").mouseover(function(){
      $("h1").css("color","pink");});
    });


//before, after, prepend, postend

$("button").before("<h2>before</h2>");
$("h1").prepend("<h2>Prepend</h2>");
$("button").after("<h2>after</h2>");
$("h1").append("<h2>append</h2>");
$("h3").remove();
$("button").slideUp().slideDown().animate({"color":"orange"});



//keypress addEventListener




// for(var i=0;i<5;i++)
// 	{
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector(“h1”).style.color=“purple”;
//       });
// };
