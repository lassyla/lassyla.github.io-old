//fade doesnt work. why? 

var codeboxes = document.getElementsByClassName("codebox");
var currentbox; 
var numboxes = 11;
var currentgal = 0;

function showDesc(x) {
  currentbox = x; 
  $("#screen").animate(
    {top: 0, opacity: 1}, 500);  
  if(x == 0)
    {
      $("#right").css({"visibility":"hidden"});
    }
  else if(x == numboxes)
    {
      $("#left").css({"visibility":"hidden"});
    }
  else
  {
    $("#left").css({"visibility":"visible"});
    $("#right").css({"visibility":"visible"});

  }
  $("#content").attr("src", $("#gal" + currentgal)[0].getElementsByClassName("codeimg")[numboxes-currentbox].src);


}

function hideDesc() {

  $("#screen").animate(
    {top: '100%', opacity: 0}, 500);  
}

function goLeft(){
  if(currentbox == numboxes - 1)
    $("#left").css({"visibility":"hidden"});
  if(currentbox == 0)
    $("#left").css({"visibility":"visible"});
  currentbox ++; 
  $("#content").attr("src", $("#gal" + currentgal)[0].getElementsByClassName("codeimg")[numboxes-currentbox].src);
}

function goRight(){
  if(currentbox == 1)
    $("#right").css({"visibility":"hidden"});
  if(currentbox == numboxes)
    $("#left").css({"visibility":"visible"});
    currentbox --; 
  $("#content").attr("src", $("#gal" + currentgal)[0].getElementsByClassName("codeimg")[numboxes-currentbox].src);

}

function goToGal(x){
  if(x != currentgal){
    $("#gal" + currentgal).addClass("hidden"); 
    $("#nav")[0].getElementsByTagName("li")[currentgal].style.color = "black"; 
    currentgal = x; 
    $("#gal" + currentgal).removeClass("hidden"); 
    $("#nav")[0].getElementsByTagName("li")[currentgal].style.color = "blue"; 

  }
}

function goBack(){
  $("#transitionscreen").html("loading..."); 
  $("#transitionscreen").animate({"left":"0", "opacity":1}, 1000, function(){window.location.href = "./index.html";
}); 

}

$(window).on("load", function(){
  $("#transitionscreen").html("all done"); 
  setTimeout(function(){
    $("#transitionscreen").animate({"left":"-100vw", "opacity":0}, 1000)
  }, 1000); 

}); 