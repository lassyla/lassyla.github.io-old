//TO DO: make archive for old works
//TO DO: footer

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
  var currentpos = $("#wrapper").scrollTop() + $(window).height() / 1.5; 
  if(currentpos >= $("#page" + currentpage).position().top && currentpos < $("#page" + currentpage).position().top  + $("#page" + i).height())
    return; 
  for(var i = 0; i <= numpages; i++) 
    if(currentpos >= $("#page" + i).position().top && currentpos < $("#page" + i).position().top  + $("#page" + i).height()){
        $("#nav" + currentpage).removeClass("selected");
        currentpage = i; 
        $("#nav" + currentpage).addClass("selected");
        $("#page" + currentpage).removeClass("hide"); 
        return;
      }
}

function gotopage(x) {
  var time = Math.abs(currentpage - x) * 600 ; 
  $('#wrapper').animate({
    scrollTop: $("#page" + x).position().top  + 'px'
  }, time); 
  $(window).bind("mousewheel", function() {
    $("html, body").stop();
  });
  if(currentpage != x){
        $("#nav" + currentpage).removeClass("selected");
    currentpage = x; 
        $("#nav" + currentpage).addClass("selected");
  }
  
        
}



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({alpha:true} );
var loader = new THREE.JSONLoader();

if(window.innerWidth > window.innerHeight) 
  renderer.setSize(window.innerHeight, window.innerHeight);
else 
  renderer.setSize(window.innerWidth, window.innerWidth);
renderer.setClearColor(0xffffff, 0); 
document.getElementById("threedcontainer").appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

var cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 1, 0)
cube.userData = {title: "work", page: 2, material: new THREE.MeshLambertMaterial({color: 0xffffff})};
scene.add(cube);
var me = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0x00f0ff}));
me.position.set(-2, -1, 0)
me.userData = {title: "about", page: 1, material:  new THREE.MeshBasicMaterial({color: 0x00f0ff})};
scene.add(me);
var dog = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xff00ff}));
dog.position.set(2, -1, 0)
dog.userData = {title: "contact", page: 3, material: dog.material};
scene.add(dog);


camera.position.z = 4;
loader.load("model/sunshine.json", function(geometry, materials) {
  scene.remove(cube); 
  var material = new THREE.MeshFaceMaterial(materials);
  cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xfffffff, wireframe: true}));  
  cube.userData = {title: "about", page: 1, material: material};
  cube.position.set(0, 1.4, 0);
  cube.scale.set(.7, .7, .7); 
  scene.add(cube);
});
loader.load("model/bear.json", function(geometry, materials) {
  scene.remove(me); 
  var material = new THREE.MeshFaceMaterial(materials);
  me = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xfffffff, wireframe: true}));  
  me.userData = {title: "work", page: 2, material: material};
  me.position.set(-1.7, -1.5, 0);
  me.scale.set(.7, .7, .7); 
  scene.add(me);
});
loader.load("model/sliug2.json", function(geometry, materials) {
  scene.remove(dog); 
  var material = new THREE.MeshFaceMaterial(materials);
  dog = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xfffffff, wireframe: true}));  
  dog.userData = {title: "contact", page: 3, material: material};
  dog.position.set(1.7, -1.5, 0);
  dog.scale.set(.5, .5, .5); 
  scene.add(dog);
});

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
var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
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
         intersect.object.material = new THREE.MeshBasicMaterial({color: 0xfffffff, wireframe: true});
        //intersect.object.material.color.setHex(intersect.object.userData.color); 
      intersect = raycaster.intersectObjects(scene.children)[0]
      if(intersect){
         intersect.object.material =  intersect.object.userData.material; 
        //intersect.object.material.color.setHex((intersect.object.userData.color + 0xffffff) / 2); 
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
  cube.rotation.x -= 0.01;
  cube.rotation.y += 0.01;
  me.rotation.x -= 0.01;
  me.rotation.y -= 0.01;
  dog.rotation.x += 0.01;
  dog.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate(); 

function redir(x){
    $("#transitionscreen").html("loading..."); 
    $("#transitionscreen").animate({"right":"0", "opacity":1}, 1000, function(){
      setTimeout(function(){window.location.href = x}, 200);
    });
}

$(window).on("load", function(){
  $("#transitionscreen").html("all done"); 
  setTimeout(function(){
    $("#transitionscreen").animate({"right":"-100vw", "opacity":0}, 1000)
  }, 1000); 

}); 