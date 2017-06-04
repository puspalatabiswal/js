//how many way to create object


//first way : using new
var obj = new Object()
console.log(obj);


//second way : using literal
var obj1 ={};
console.log(obj1);

//third way : using Object.create
var obj2 = Object.create(null); //here null is a prototype(which takes as object)
console.log(obj2);

// fourth way :using function constructor

function Person(){

}

var obj3 = new Person();
console.log(obj3);

//=================================


//how many way to define the object property
var obj5 = {
	id :1
};

obj5["name"] = "pooja";
obj5.city = "banglore";


Object.defineProperty(obj5, 'state' ,{
	value:"ka"
})

console.log(obj5);

//if u want to delete object property
delete obj5.city;

console.log(obj5);



//1.preventExtensions()
/* we can not add new property
*we can modify the existing property
*we can delete existing property*/
var person1 ={name: "johngolt" , age:'35'};
Object.preventExtensions(person1);
person1.name="puspa";
person1.city="banglore";
delete person1.age;
console.log(person1);


//2.seal()
/*
we can not add new property
*we can only  modify the existing property
*we cannot delete existing property
*/
var person3 ={name: "johngolt" , age:'35'};
Object.seal(person3);
person3.name="puspa";
person3.city="banglore";
delete person3.age;
console.log(person3);


//3.freeze
/*
we can not add new property
*we can not modify the existing property
*we can not delete existing property
*/
var person4 ={name: "johngolt" , age:'35'};
Object.freeze(person4);
person4.name="puspa";
person4.city="banglore";
delete person4.age;
console.log(person4);


//==========adding properties and methods to object=================
   var person7 ={
   	firstName : "pooja",
   	lastName : "destnick",
   	fullname : function(){
   		return this.firstName +' ' +this.lastName;
   	}
   }
   var fullName = person7.fullname();
console.log(fullName)
/*console.log(person7.fullname())*///ANOTHER WAY

   var firstname = person7.firstName;
console.log(firstname)

//=======================

var customer ={
	name : "puspa biswal",
	city : "banglore",
	age :"22"
}

var keys = Object.keys(customer);
console.log(keys);

var values = Object.values(customer);
console.log(values);

//===============================

