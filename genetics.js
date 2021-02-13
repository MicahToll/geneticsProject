function input(){
	output("it worked");
	outputLine("again");
	outputLine("and again");
}

function output(str){
	document.getElementById("output").innerHTML = str;
}

function outputLine(str){
	document.getElementById("output").innerHTML += "</br>"+str;
}
/*
class Thing{
	strength;
	constructor(){
		strength = 0;
	}
}

class Character extends Thing{
	will;
	constructor(){
		super();
		will = 0;
	}
}

class Ability{
	
}

*/