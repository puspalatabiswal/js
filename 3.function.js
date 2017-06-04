//creating function

//1.regular function

function sayHello (){
return "hello world";
}
var message = sayHello();
console.log(message);
/*console.log(sayHello());*/


//1.anonymous function
console.log(sayAgain)
var sayAgain = function(){
	return "hello again";
}

console.log(sayAgain());
console.log(sayAgain);



//1.constructor  function

function Person(){
	this.firstName = "sundar";
	this.lastName = "srini";
	this.fullName = function(){
		return this.firstName +' '+	this.lastName;
	}
}

/*var newPerson = new Person();*/
/*this.fullName = function(){
		return this.firstName +' '+	this.lastName;
	}*/// will be used when the new data added and used to invoke..by using prototype we can create n number of function
var newPerson1 = new Person("pooja" , "biswal");
var newPerson2 = new Person("roja" , "biswal");
var newPerson3 = new Person("lija" , "biswal");
console.log(newPerson1.fullName());
console.log(newPerson2.fullName());
console.log(newPerson3.fullName());

//self invoking function

/*(function(name){
	console.log('hello   '+ name);
})("puspita")*/