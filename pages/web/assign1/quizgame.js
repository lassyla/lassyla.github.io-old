var colors;
var hex;
var count;
var time;
function showList(){ 
	for(var k = 0; k<colors.length; k++) {
		ol = document.getElementById("answers");
		var listItem = document.createElement("li");
		var text = document.createTextNode("");
		listItem.id = colors[k];
		listItem.style.background = hex[k];
		listItem.appendChild(text);
		ol.appendChild(listItem);
	}
}
function checkGuess(){ 
	var guess = document.getElementById("input").value;
	for(var k = 0; k<colors.length; k++)
		if(colors[k].toUpperCase() == guess.toUpperCase()) {
			document.getElementById("input").value = "";
			document.getElementById(colors[k]).innerHTML = "" + colors[k];
			document.getElementById("title").style.color = hex[k];
			colors[k] = "";
            var bar = document.getElementById("progressbar");
            var line = document.createElement("div");
            line.id = "progressbarfill";
            line.style.background = hex[k];
            bar.appendChild(line); 
			hex[k] = "";
		}
	if(isEmpty(colors)) {
		document.getElementById("startscreen").innerHTML = "<h3 style='color:black;'>You win! <br> Score: "+time+" </h3><div id='start' onclick='start()'> Replay </div>"
		document.getElementById("startscreen").style.visibility = "visible";
		clearInterval(count);
	}
}
function isEmpty(ar) {
	for(var k = 0; k<ar.length; k++) 
		if(ar[k] != "")
			return false
	return true
}
function countDown(){
	time--; 
	document.getElementById("counter").innerHTML = "Time Left: " + Math.floor(time/60) + ":" + time%60;
	if(time%60 < 10)
			document.getElementById("counter").innerHTML = "Time Left: " + Math.floor(time/60) + ":0" + time%60;
	if(time == 0) {
		document.getElementById("startscreen").innerHTML = "<h3 style='color:black;'>You ran out of time!</h3><div id='start' onclick='start()'> Try Again </div>"
		document.getElementById("startscreen").style.visibility = "visible";
	}
}
function start() {
	clearInterval(count);
	setData();
	document.getElementById("startscreen").style.visibility = "hidden";
	document.getElementById("title").style.color = "white";
	time = 600;
	count = setInterval(countDown, 1000);
}
function setData() {
	/////actual colors :P 
	colors = ['Mahogany', 'Fuzzy Wuzzy Brown', 'Chestnut', 'Red Orange', 'Sunset Orange', 'Bittersweet', 'Melon', 'Outrageous Orange', 'Vivid Tangerine', 'Burnt Sienna', 'Brown', 'Sepia', 'Orange', 'Burnt Orange', 'Copper', 'Mango Tango', 'Atomic Tangerine', 'Beaver', 'Antique Brass', 'Desert Sand', 'Raw Sienna', 'Tumbleweed', 'Tan', 'Peach', 'Macaroni and Cheese', 'Apricot', 'Neon Carrot', 'Almond', 'Yellow Orange', 'Gold', 'Shadow', 'Banana Mania', 'Sunglow', 'Goldenrod', 'Dandelion', 'Yellow', 'Green Yellow', 'Spring Green', 'Olive Green', 'Laser Lemon', 'Unmellow Yellow', 'Canary', 'Yellow Green', 'Inch Worm', 'Asparagus', 'Granny Smith Apple', 'Electric Lime', 'Screamin Green', 'Fern', 'Forest Green', 'Sea Green', 'Green', 'Mountain Meadow', 'Shamrock', 'Jungle Green', 'Caribbean Green', 'Tropical Rain Forest', 'Pine Green', 'Robin Egg Blue', 'Aquamarine', 'Turquoise Blue', 'Sky Blue', 'Outer Space', 'Blue Green', 'Pacific Blue', 'Cerulean', 'Cornflower', 'Midnight Blue', 'Navy Blue', 'Denim', 'Blue', 'Periwinkle', 'Cadet Blue', 'Indigo', 'Wild Blue Yonder', 'Manatee', 'Blue Bell', 'Blue Violet', 'Purple Heart', 'Royal Purple', 'Purple Mountains Majesty', 'Purple', 'Wisteria', 'Vivid Violet', 'Fuchsia', 'Shocking Pink', 'Pink Flamingo', 'Plum', 'Hot Magenta', 'Purple Pizzazz', 'Razzle Dazzle Rose', 'Orchid', 'Red Violet', 'Eggplant', 'Cerise', 'Wild Strawberry', 'Magenta', 'Lavender', 'Cotton Candy', 'Violet Red', 'Carnation Pink', 'Razzmatazz', 'Piggy Pink', 'Jazzberry Jam', 'Blush', 'Tickle Me Pink', 'Pink Sherbet', 'Maroon', 'Red', 'Radical Red', 'Mauvelous', 'Wild Watermelon', 'Scarlet', 'Salmon', 'Brick Red', 'White', 'Timberwolf', 'Silver', 'Gray', 'Black']
	hex = ['#CD4A4A', '#CC6666', '#BC5D58', '#FF5349', '#FD5E53', '#FD7C6E', '#FDBCB4', '#FF6E4A', '#FFA089', '#EA7E5D', '#B4674D', '#A5694F', '#FF7538', '#FF7F49', '#DD9475', '#FF8243', '#FFA474', '#9F8170', '#CD9575', '#EFCDB8', '#D68A59', '#DEAA88', '#FAA76C', '#FFCFAB', '#FFBD88', '#FDD9B5', '#FFA343', '#EFDBC5', '#FFB653', '#E7C697', '#8A795D', '#FAE7B5', '#FFCF48', '#FCD975', '#FDDB6D', '#FCE883', '#F0E891', '#ECEABE', '#BAB86C', '#FDFC74', '#FDFC74', '#FFFF99', '#C5E384', '#B2EC5D', '#87A96B', '#A8E4A0', '#1DF914', '#76FF7A', '#71BC78', '#6DAE81', '#9FE2BF', '#1CAC78', '#30BA8F', '#45CEA2', '#3BB08F', '#1CD3A2', '#17806D', '#158078', '#1FCECB', '#78DBE2', '#77DDE7', '#80DAEB', '#414A4C', '#199EBD', '#1CA9C9', '#1DACD6', '#9ACEEB', '#1A4876', '#1974D2', '#2B6CC4', '#1F75FE', '#C5D0E6', '#B0B7C6', '#5D76CB', '#A2ADD0', '#979AAA', '#ADADD6', '#7366BD', '#7442C8', '#7851A9', '#9D81BA', '#926EAE', '#CDA4DE', '#8F509D', '#C364C5', '#FB7EFD', '#FC74FD', '#8E4585', '#FF1DCE', '#FF1DCE', '#FF48D0', '#E6A8D7', '#C0448F', '#6E5160', '#DD4492', '#FF43A4', '#F664AF', '#FCB4D5', '#FFBCD9', '#F75394', '#FFAACC', '#E3256B', '#FDD7E4', '#CA3767', '#DE5D83', '#FC89AC', '#F780A1', '#C8385A', '#EE204D', '#FF496C', '#EF98AA', '#FC6C85', '#FC2847', '#FF9BAA', '#CB4154', '#EDEDED', '#DBD7D2', '#CDC5C2', '#95918C', '#232323']
	///colors for test run
	// colors = ["red", "orange", "yellow", "green", "blue", "purple"];
	// hex = ["red", "orange", "yellow", "green", "blue", "purple"];
	document.getElementById("answers").innerHTML = "";
    document.getElementById("progressbar").innerHTML = ""; 
	showList();
  //////  sample of what the full progress bar looks like
//    for(var k = 0; k<colors.length; k++) {

//            var bar = document.getElementById("progressbar");
//            var line = document.createElement("div");
//            line.id = "progressbarfill";
//            line.style.background = hex[k];
//            bar.appendChild(line);        
//    }
}
	