//TO DO: the scroller() doesnt do anything
//TO DO: create graphics
//TO DO: design the divs for projects. think especially about responsive design. 
//instead of going left on transition screen, open like doors

var scrolltimeout; 
var numpages = 3; 
var currentpage = 0; 
var nav = false; 

  $("#background1").height($("#wrapper")[0].scrollHeight );



$("#wrapper").scroll(function () {
    if(scrolltimeout) clearTimeout(scrolltimeout); 
    scrolltimeout = setTimeout(function(){
      scroller();
  }, 50); 
}); 

function scroller() {
  var currentpos = $("#wrapper").scrollTop(); 
  if(currentpos >= $("#page" + currentpage).position().top && currentpos < $("#page" + currentpage).position().top  + $("#page" + i).height())
    return; 
  for(var i = 0; i <= numpages; i++) 
    if(currentpos >= $("#page" + i).position().top && currentpos < $("#page" + i).position().top  + $("#page" + i).height()){
        $("#nav" + currentpage).animate({
          color: "black"
        }, 50);        
        currentpage = i; 
        $("#nav" + currentpage).animate({
          color: "white"
        }, 50); 
        return;
      }
}

function gotopage(x) {
  var time = Math.abs(currentpage - x) * 600 ; 
  $('#wrapper').animate({
    scrollTop: $("#page" + x).position().top  + 'px'
  }, time, 'easeOutQuad'); 
  $(window).bind("mousewheel", function() {
    $("html, body").stop();
  });
  if(currentpage != x){
    $("#nav" + currentpage).animate({
      color: "black"
    }, 50);        
    currentpage = x; 
    $("#nav" + currentpage).animate({
      color: "white"
    }, 50); 
  }
  
        
}

function togglenav(){
  if(nav){
    $("#navbar").animate({
      right: "-100px"
    }, 200);        
    nav = false; 
  }
  else{
    $("#navbar").animate({
      right: 0
    }, 200);
    nav = true; 
  }
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({alpha:true} );
if(window.innerWidth > window.innerHeight) 
  renderer.setSize(window.innerHeight, window.innerHeight);
else 
  renderer.setSize(window.innerWidth, window.innerWidth);
renderer.setClearColor(0xffffff, .2); 
document.getElementById("threedcontainer").appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(2, 1, 0)
cube.userData = {title: "work", page: 2, color: 0x00ff00};
scene.add(cube);
var me = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0x00ffff}));
me.position.set(-2, 1, 0)
me.userData = {title: "about", page: 1, color: 0x00ffff};
scene.add(me);
var dog = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xff00ff}));
dog.position.set(2, -1, 0)
dog.userData = {title: "no", page: 3, color: 0xff00ff};
scene.add(dog);
var comp = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xffff00}));
comp.position.set(-2, -1, 0)
comp.userData = {title: "contact", page: 4, color: 0xffff00};
scene.add(comp);

camera.position.z = 4;


window.addEventListener('resize', function() {
  $("#background1").height(0); 
  $("#background1").height($("#wrapper")[0].scrollHeight );

  if(window.innerWidth > window.innerHeight)
    renderer.setSize(window.innerHeight, window.innerHeight);
  else {
    renderer.setSize(window.innerWidth, window.innerWidth);
    document.getElementById("threedcontainer").marginTop = window.innerHeight - window.innerWidth + "px"; 
  }
});

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var intersect; 
window.addEventListener('mousemove', function(event) {
  event.preventDefault();
    
  var rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX-renderer.domElement.offsetLeft)/renderer.domElement.width)*2 - 1;
  mouse.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if(intersect != raycaster.intersectObjects(scene.children)[0])
   {
      if(intersect)
        intersect.object.material.color.setHex(intersect.object.userData.color); 
      intersect = raycaster.intersectObjects(scene.children)[0]
      if(intersect){
        intersect.object.material.color.setHex((intersect.object.userData.color + 0xffffff) / 2); 
        $("#lassyla").html(intersect.object.userData.title); 
      }
     else 
        $("#lassyla").html("alyssa lee"); 
   }
});
window.addEventListener('mousedown', function() {
  if(intersect)
    gotopage(intersect.object.userData.page); 
});


var animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  me.rotation.y += 0.01;
  dog.rotation.x += 0.01;
  comp.rotation.x += 0.01;
  comp.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate(); 

function goToGal(){
    $("#transitionscreen").html("loading..."); 

    $("#transitionscreen").animate({"right":"0", "opacity":1}, 1000, function(){window.location.href = "./illustrations.html";
    });
}
$(window).on("load", function(){
  $("#transitionscreen").html("all done"); 
  setTimeout(function(){
    $("#transitionscreen").animate({"right":"-100vw", "opacity":0}, 1000)
  }, 1000); 

}); 