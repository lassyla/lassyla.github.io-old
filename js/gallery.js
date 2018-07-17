//fade doesnt work. why? 

var codeboxes = document.getElementsByClassName("codebox");
var currentbox; 
var currentgal = 0;
var images; 

function showDesc(x) {
  currentbox = x; 
  $("#screen").animate(
    {top: 0, opacity: 1}, 500);  
  if(x == 0)
    {
      $("#right").css({"visibility":"hidden"});
    }
  else if(x == images.length - 1)
    {
      $("#left").css({"visibility":"hidden"});
    }
  else
  {
    $("#left").css({"visibility":"visible"});
    $("#right").css({"visibility":"visible"});

  }
 images = $("#gal" + currentgal)[0].getElementsByClassName("codeimg");  

  $("#content").attr("src", images[images.length-currentbox - 1].src);
}

function hideDesc() {

  $("#screen").animate(
    {top: '100%', opacity: 0}, 500);  
}

function goLeft(){
  if(currentbox == images.length - 1) return; 
  if(currentbox == images.length - 2)
    $("#left").css({"visibility":"hidden"});
  if(currentbox == 0)
    $("#left").css({"visibility":"visible"});
  currentbox ++; 
  $("#content").attr("src", images[images.length-currentbox - 1].src);
}

function goRight(){
  if(currentbox == 0) return; 
  if(currentbox == 1)
    $("#right").css({"visibility":"hidden"});
  if(currentbox == images.length - 1)
    $("#left").css({"visibility":"visible"});
    currentbox --; 
  $("#content").attr("src", images[images.length-currentbox - 1].src);

}

function goToGal(x){
  if(x != currentgal){
    $("#gal" + currentgal).addClass("hidden"); 
    $("#nav")[0].getElementsByTagName("li")[currentgal].style.color = "black"; 
    currentgal = x; 
    $("#gal" + currentgal).removeClass("hidden"); 
    $("#nav")[0].getElementsByTagName("li")[currentgal].style.color = "blue"; 
    images = $("#gal" + currentgal)[0].getElementsByClassName("codeimg");  

  }
}

function goBack(){
  $("#transitionscreen").animate({"left":"0", "opacity":1}, 1000, function(){window.location.href = "./index.html";
}); 

}

$(window).on("load", function(){
  setTimeout(function(){
    $("#transitionscreen").animate({"left":"-100vw", "opacity":0}, 1000)
  }, 1000); 
 images = $("#gal" + currentgal)[0].getElementsByClassName("codeimg");  

}); 

window.onkeydown = function(e){
    switch(e.keyCode){
      case 37: 
        goLeft(); 
        break;
      case 39: 
        goRight(); 
        break; 
      case 40: 
        hideDesc();
        break; 
    }
};
