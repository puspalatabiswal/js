var person1 = {name : "pooja", age :22}
var person2 = {name : "roja", age :25}


function sayHello(message , wish){

	return message + " " +this.name + " " + this.age +wish;
}

//bind
var msg = sayHello.bind(person2);
console.log(msg("Hello"));

// var msg1 = sayHello.bind(person2, "Hello");
// console.log(msg1());//another way

//call
var mesg = sayHello.call(person2, "Hello" ,"today");
console.log(mesg);


//apply
var mssg = sayHello.apply(person1, ["Hello", "today"]);
console.log(mssg);