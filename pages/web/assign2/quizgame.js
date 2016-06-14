var questions; 
var skipped; 
var answered; 
var currentQuestion; 
var time; 
var count;
var half; 
var currentRow; 
var progress; 
function start() {
	clearInterval(count);
	document.getElementById("q1").innerHTML = "<td>Question</td>";
	document.getElementById("q2").innerHTML = "<td>Question</td>";
	document.getElementById("a1").innerHTML = "<td>Answer</td>";
	document.getElementById("a2").innerHTML = "<td>Answer</td>";
	document.getElementById("startscreen").style.visibility = "hidden";
	document.getElementById("title").style.color = "white";
	time = 120;
	count = setInterval(countDown, 1000);
	questions = [{q:"Name a citrus that begins with the letter 'T'", ans:["tangelo, tangerine, tangor", "tangelo", "tangerine", "tangor", ]}, {q:"Where did the kiwi first grow?", ans:["China"]}, {q:"Chinese gooseberry is also known as:", ans:["kiwi"]}, {q:"A loganberry a cross of blackberry and:", ans:["raspberry"]}, {q:"The state fruit of ohio is: ", ans:["cranberry"]}, {q:"This fruit has seeds on the outside: ", ans:["strawberry"]}, {q:"Name a stone fruit that begins with 'P'", ans:["Peach, plum, pluot", "peach", "plum", "pluot"]}];
	randomize(questions); 
	currentQuestion = questions[0]; 
	skipped = 0;
	answered = 0; 
	currentRow = 0; 
    progress = 0; 
	half = Math.round(questions.length / 2 + .1);
	for(var k = 0; k<half; k++){
		q1 = document.getElementById("q1");
		var tableQ = document.createElement("td");
		var textQ = document.createTextNode("???");
		tableQ.id = "que" + k; 
		tableQ.appendChild(textQ);
		q1.appendChild(tableQ); 
		a1 = document.getElementById("a1");
		var tableA = document.createElement("td");
		var textA = document.createTextNode("???");
		tableA.id = "ans" + k; 
		tableA.appendChild(textA);
		a1.appendChild(tableA); 
	}
	for(var k = half; k<questions.length; k++){
		q2 = document.getElementById("q2");
		var tableQ = document.createElement("td");
		var textQ = document.createTextNode("???");
		tableQ.id = "que" + k; 
		tableQ.appendChild(textQ);
		q2.appendChild(tableQ); 
		a2 = document.getElementById("a2");
		var tableA = document.createElement("td");
		var textA = document.createTextNode("???");
		tableA.id = "ans" + k; 	
		tableA.appendChild(textA);
		a2.appendChild(tableA); 	
	}
	displayQuestion(); 
}
function countDown(){
	time--; 
	document.getElementById("counter").innerHTML = "Time Left: " + Math.floor(time/60) + ":" + time%60;
	if(time%60 < 10)
			document.getElementById("counter").innerHTML = "Time Left: " + Math.floor(time/60) + ":0" + time%60;
	if(time <= 0) {
		document.getElementById("startscreen").innerHTML = "<h3 style='color:black;'>You ran out of time!</h3><div id='start' onclick='start()'> Try Again </div>"
		document.getElementById("startscreen").style.visibility = "visible";
	}
}
function randomize(qs){
	var a; 
	for(var k = 0; k<qs.length; k++){
		index = Math.floor(Math.random()*qs.length)
		a = qs[index]; 
		qs[index] = qs[k]; 
		qs[k] = a; 
	}
}
function displayQuestion() {
	document.getElementById("que" + currentRow).innerHTML = "" + currentQuestion.q;  
	document.getElementById("question"). innerHTML = "" + currentQuestion.q; 
	document.getElementById("que" + currentRow).style.background = "gray"; 
}
function guess() {
	var guess = document.getElementById("input").value;
	var possibleAnswers = currentQuestion.ans; 
	for(var k = 0; k <possibleAnswers.length; k++) {
		if(guess.toUpperCase() == possibleAnswers[k].toUpperCase()){
			document.getElementById("ans" + currentRow).innerHTML = "" + currentQuestion.ans[0]; 
			document.getElementById("ans" + currentRow).style.background = "green";
			document.getElementById("input").value = ""; 
			answered ++; 
			if(answered + skipped == questions.length){
				document.getElementById("startscreen").innerHTML = "<h3 style='color:black;'>You win! <br> Score: "+time+" </h3><div id='start' onclick='start()'> Replay </div>"
				document.getElementById("startscreen").style.visibility = "visible";
				clearInterval(count);
			}
			currentQuestion = questions[skipped + answered]; 
			currentRow++; 
			displayQuestion();
		}
	}
    progress ++;
}
function skip() {
    document.getElementById("ans" + currentRow).innerHTML = "" + currentQuestion.ans[0]; 
    document.getElementById("ans" + currentRow).style.background = "red";
    skipped ++; 
    time -= 20; 
    if(answered + skipped == questions.length && time>0){
        document.getElementById("startscreen").innerHTML = "<h3 style='color:black;'>You win! <br> Score: "+time+" </h3><div id='start' onclick='start()'> Replay </div>"
        document.getElementById("startscreen").style.visibility = "visible";
        clearInterval(count);
    }
    currentQuestion = questions[skipped + answered]; 
    currentRow++; 
    displayQuestion();
    
}
