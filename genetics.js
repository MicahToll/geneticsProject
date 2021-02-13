//Class structure
class creature{
    animal_name = "";
    gender;//can equal 'm' or 'f' (maybe 'a' or 'i' if needed as well)
    traits = [];//this will be a list of traits 
    constructor(animal_name, gender){
        this.animal_name = animal_name;
        this.gender = gender;
    }
    /*reproduce(){
        return new 
    }*/
}

class Human extends creature{
    constructor(gender){
        super('human', gender);
    }
}

class dog extends creature{
    constructor(gender){
        super('dog', gender);
    }
}


class trait{
    trait_name = "";
    constuctor(trait_name){
        this.trait_name = trait_name;
    }
}
/*
example 1
a person with blood type O
they are a creature Human with the triats blood type
*/
bob = new Human('m');
console.log(bob);

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