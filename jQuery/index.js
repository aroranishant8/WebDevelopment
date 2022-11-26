
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
      $("h1").css("color","blue");});
    });



//keypress addEventListener




// for(var i=0;i<5;i++)
// 	{
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector(“h1”).style.color=“purple”;
//       });
// };
