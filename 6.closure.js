function sayHello(message){
	return function(firstName , lastName){
		return message +" "+ firstName+" "+lastName;
	}

}


var hww = sayHello("hello");
console.log(hww("pooja" ,"biswal"));
console.log(hww);