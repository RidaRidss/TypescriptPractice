/*this code will add object properties by using "Any" */

//
//var obj :any = { name : "Rida" , age : 21 };
//obj={qualification:"BCS", class:"Module B"};



/*Checking Of Duck Typing*/
/* This code will also add object properties without adding "Any" */
//var obj = { name : "rida" , age : 21 };
//obj = { name : "Rida" , age : 21 , qualification:"BCS", class:"Module B" }

		/*number type Arrays*/
		
//var numArr : number[]=[1,2,3,4,5,6];
//alert(numArr.pop[5]);
//alert(numArr.pop[4]);
//alert(numArr.pop[3]);
//alert(numArr.pop[2]);
//alert(numArr.pop[1]);
//alert(numArr.pop[0]);

	/* any type array */
	
//var anyArr : any[]=[1,2,3,"Rida"];
//
//alert(anyArr.pop[3]);
//alert(anyArr.pop[2]);
//alert(anyArr.pop[1]);
//alert(anyArr.pop[0]);

		/* string type array */
//		var arr:string[]=["Rida","junaid","Daniyal"];


			/*function Code*/
//function sum(a:number){
//	return a+2;
//}
//var b=prompt("","enter your number");
//alert(sum(Number(b)));



		/*Simple Hello World Code */

//let x="Hello World";
//document.write(x);




/*  var obj={ name : "Rida" , id : 1 }
obj={ name : "Rida" , id : 1 , remarks : "80%" }   */

	  /*above code samw as */
/*var obj :any ={ name : "Rida" , id : 1 };
obj= { remarks : "80%" } ;
obj={module: "B"};   

*/

/*
var a:number =1;
var b :string = a.toString();
var compare : boolean = (1==1);
var c : number = 1 + 2;

*/



/* var myString : string ="Pakistan";
var myNumber : number =1;
var myBoolean : boolean =true;
var a : number = null;

var a=1;
var b="1"
if(a.toString() === b){
	console.log("true");
}
else{
	console.log("false");
}
*/

			/* if a object is already exists */

//var a={p1:1,p2:2}

			/* if a object of same values exists */
//var b={p1:1,p2:2}

/* that does not means both objects are equal , both are two separate objects */

//if (a==b) {
//alert("yes , a is equal to b");	
//}
//else { 
//alert("No , a is not equal to b");
//}

	/*if we save values of one object in anothera object */ 
//var c = a;
		/*then both will be equal */
//if(c == b){
//alert("Yes c = = b");
//}
//else{
//	alert("No, c is not equal to b");
//}


		/*type Casting */
		
//		var a:string="Rida";
//		a=<any>1;
//		a=<any>32;		

		/* We have created a dictionary for vehicle's state*/

//enum vehicles{
//	reverse = 9,
//	forward = 8,
//	stop = 7
//}
	
	/*here we are checking state "9" is equal to the "reverse state" or not */ 

//if(9==vehicles.reverse){
//	alert("true");
//}
//else{
//	alert("false")
//}


		/* We have created another dictionary for vehicle's state*/

//enum vehicles{
//	reverse = 9,
//	forward = 8,
//	stop = 7
//}

		   /*here we are checking the current state*/ 
	
//var currentState =9;
//alert(vehicles[currentState]);



/* self calling anonyms function , it will create , call , execute and end at the same time or at (line no. 157) */

//			(function (){alert("self calling funaction")});
			
			
			/* when all javascript code will be rendered then this function will run by using "window.onload" javascript's function */
		
//			window.onload=function(){}
			
			/*start practice */
	
		// console.log("Hello World");
		// console.log(1);
		
		/* number type */
		// var a :number = 1;
		// a = 3;
		// a = null;
		
		/* string type */
		
		// var b :string ="Pakistan";
		// b = "Pak";
		
		/*Boolean Type */
		
		// var c :boolean = false;
		// c = true;
		// c = null;
		
		
		/* Const - we use const whenever we won't to change the value of that variable in all program*/
		// const a = 1;
		/* 	now we cannot change the value of "a"   */ 
		/*   note:   1.    we cannot write const-variable like this : -->  const a; 
		     variable a must have a value with const
			 
			 		2.   we cannot use same variable name with var and const like this :  --> var a; and const a = 1; or var a;    */
		
		
		
		
		/*  Override a function value    */
		
		// var fn2 = function(){
		// 	return 1+2;
		// }
		
		/*     now we are overriding fn2 function    */
		// fn2 = ()=>{
		// 	return 2+2;
		// }
		
		
		
			
		// const fn1 = function(a:number):number{
		// 	return a+2;
		// }
		
		
		// const a = [];
		// a.push(1);
		// fn1(1);
		// fn1(2);
		
		/* here we have used "any" because Of Anynomyous variable type  named conType  */
		
		// var conType = "Pakistan";
		// 		 const con :any = conType;



			/*here we have constant value named variable "con"   , and contype is just a refrence , it is not a constant variable , so we can change its value */ 

	// var conType;
	// conType =5;
	// const con :number = conType;
	// conType="Pakistan";


/* Another Example Of Constant  */

// var conType;
// var data = prompt("enter value");
// if(data == "a"){
// 	conType = "string"
// }
// else{
// 	conType=1;
// }


/* by using let with a same variable named "num" which is available outside a scope or block , now it will not change the value of outside variable  */


// let num =2;
// if(true){
// 	let result = 0;
// 	let num = 1;
// 	let num2 = 10;
// 	result =num +num2;
// 	console.log(result);
// }
// let newresult =num + 3;
// console.log("num =>" + num);
// console.log("newresult =>"+newresult);


			/*  duck typing   */
			// let a = {id:1,name:"rida"}
			// a = {id:1,name:"abc",class:"a"}
			// a={id:1,name:"rida",lastname:"DAB"}
			// console.log(a);
			
			// let arr:Array<string>=["R","I","D","A"]
			
	/*	note :	 we use enum number in human readable form , we can extend enum but */
	// enum doorstate{
	// 	open,close
	// }
	// console.log(doorstate.close);
	
	/* note: if we have not give the values , if will give values by default 0 and 1 , we can create ambiguity like this */
	// enum doorstate{open,close}
	// enum doorstate{A=0}
	// console.log(doorstate.close);
	// console.log(doorstate.open);
/*now open is equal to 0 , close is equal to 1 , and A is also equal to 0 , but now 0 is equal to A , 0is not equal to open,it will select last value , and also assign value oppositely , like  1 is also equal to close as close is equal to 1 */
			
			/*  function */
			
			/*   if we want to define the return type value of function */
			// function fn1(a:number,b:number):number{return(a+b)}
			// alert(fn1(1,2));
			// alert(typeof(fn1));


			// var fn1 = function():number{}
			// fn1 = function(a){return 2;}	
			
			/* if we want to declare a variable and also tell it that it will contain a function whose type will be a number , we will code it like as below: */
		
			// var a1 : () => number; 
			
			// var b1 :number;
			// var b2 :string;
			// var b3:boolean;
			// var b4:number[];
			// var b5:Array<any>;
			// var a1 : Function;	
			
			/*  We can parameter as optional from right side by writing ? mark with the last parameter name in function definition 
			
			note : optional parameters from left side is not allowed 
			
			*/
			
			// function Name(fname:string,lname?:string){
			// 	return fname+lname;
			// }		
			// Name("Rida","Bilgrami");
			// Name("rida");
			
			
			/*  Default Parameters  */
// function sum(a,b,c,d,e){
// 	return	a+b+c+d+e;
// }
// alert(sum(1,2,null,3,4)) ;


/*now it will neglect null value in above code */


// function sum(a,b,c=0,d=0,e=0){
// 	alert("a :" + a);
// 	alert("b :" + b);
// 	alert("c :" + c);
// 	alert("d :" + d);
// 	alert("e :" + e);
// }
// alert(sum(1,2,null));


			// Step wise practice //

///* Data Types

//1. Boolean

//var myBoolean = true;
//console.log(myBoolean);

//
//2.String
// var myString = "test";

//var name: string = "bob";
//name = 'smith';


//3. Number
//  var myNumber = 1;



//now we can not assign these values to each other like this :

//myString = myNumber;
//myBoolean = myString;
//myNumber = myBoolean;

//TypeScript is a strongly typed language.

//var myString : string = "test";
//var myNumber: number = 1;
//var myBoolean : boolean = true;
//
//myString = myNumber.toString();
//myBoolean = (myString === "test");
//if (myBoolean) {
//	myNumber = 1;
//}
//alert("MyString value is "+ myString);
//alert("MyString Type is : " + typeof(myString));
//alert("MyBoolean value is " + myBoolean);
//alert("MyBoolean Type is : " + typeof(myBoolean));
//alert("MyNumber value is " + myNumber);
//alert("MyNumber Type is : " + typeof(myNumber));

/* Infered Typing

 //var myString = "this is a string";
 //var myNumber = 1;
 //myNumber = myString;   //type string is not assignable to type string  or Cannot convert 'string' to 'number'

 */

//4. Array
// Array types can be written in two ways :

// Ist way

   //var list:number[] = [1, 2, 3];

//second way

//var list:Array<number> = [1, 2, 3];


/*we are listing here a complete array named "list"
console.log(list);
// we are listing here ist position of an array named "list"
console.log(list[0]);
// or above can also be written as :
console.log(list['0']);
*/
// let array1 : number[] = [5, 6, 7];//correct syntax
// console.log(array1[1]);//correct syntax
////or
//console.log(array1['1']);
// let array2:Array<number> = [1, 2, 3];//alternative correct syntax
//console.log(array2[0]);
//console.log(array2['0']);
// let array3 : number[] = []; //correct syntax to define an empty array
//console.log(array3[3]);
//

//var arrayOfNumbers: number[] = [1, 2, 3];
//arrayOfNumbers = [3, 4, 5];
//alert(arrayOfNumbers[1]);
//arrayOfNumbers=[Number("3"),Number("4"),Number("5")];
//alert(arrayOfNumbers[1]);


//5. enum
// an enum is a way of giving more friendly names to sets of numeric values

//TypeScript will assign a numeric value to each of these human readable enum values.

//enum Color {Red,Green,Blue};
// if we have not already set the value in enum , it will set the values itself .
// By default, enums begin numbering their members starting at 0.
// so enum will set the values like this , Red = 0 , Green = 1 , Blue = 2
//var c : Color = Color.Green;

//console.log(c); //value 1 will be loged on console

// or we can search the values like this

//var d : Color = Color["1"];

//enum Color {Red, Green, Blue};//starts with 0
//var c: Color = Color.Green;
//
//enum Color1 {Red = 1, Green, Blue};
//var colorName: string = Color[2];
//console.log(colorName);
//
//enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
//var colorIndex = Color2["Blue"];
//console.log(colorIndex);

//enum Color1 {Red = 1, Green=-2, Blue};
// var colorName: string = Color1[-2];   // alternate way var colorname= Color1[1];

// console.log("value of color_name: "+colorName);
// console.log(Color1.Blue);

// const enum

//const enum Color {Red, Green, Blue};//starts with 0
//var c: Color = Color.Green;
//
//const enum Color1 {Red = 1, Green, Blue};
////var colorName: string = Color[2] //Not allowed with const enums
//console.log(colorName);
//
//
//const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
//var colorIndex = Color2["Blue"];
//console.log(colorIndex);

//6. Any
// The 'any' type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation.

//let myType : any = { name: "Zia", id: 1 };
// above line of code is same as below line of code:
//let myType = <any> { name: "Zia", id: 1 };       					// this is called Explicit Casting //

//myType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
//myType = { id: 3,  name: "Mike", gender: false };//can add a property
//myType = { name: "Mike", gender: false };//can even reduce the properties because of initial any explict casting

//myType = { id: 2,  name: "Tom" };// can only assign a type which has the at least the same properties
//myType = { id: 3,  name: "Mike", gender: false };//can add a property
//myType = { name: "Mike", gender: false };//can even reduce the properties because of any type
//alert(myType.name);
//alert(myType.gender);
//alert(myType.id);


//let notSure: any = 4;
//notSure = "maybe a string instead";
//notSure = false;
//alert(notSure);


//7. void

// void is just opposite of any , void is used whenever any thing has no type , or it is generally used for a function which returns nothing

//function warnUser():void{
//	alert("This is warning message");
//}
// */

/* TypeScript also uses a method called duck-typing for more complex variable types
*/
// var complexType = { name: "myName", id: 1 };
// complexType = { id: 2, name: "anotherName" };
// console.log(complexType.name);
//console.log(complexType.id);

// note about the duck typing :
// we can extend the properties , but it must contain previous properties

//let myType = { name: "Zia", id: 1 };
//myType = { id: 2,  name: "Tom" };// can only assign a type which has the atleast the same properties
//myType = { id: 3,  name: "Mike", gender: false };//can add a property


//function

//function add(x: number, y: number): number {//Named function
//	return x+y;
//}
//
//var myAdd1 = function(x: number, y: number): number { //Anonymous function
//	return x+y;
//};
//
//var myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { //Anonymous function with type
//	return x+y;
//};
//
//var myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { //type names dont matter
//	return x+y;
//};

//Optional parameters

//var concatStrings = function(a, b, c) {
//	return a + b + c;
//}
//console.log(concatStrings("a", "b", "c"));
//console.log(concatStrings("a", "b"));  // this line will be loged as abundefined i.e concatenated string( a , b , undefined)
// or //Error: Supplied parameters do not match any signature of call target.


//TypeScript introduces the question mark ? syntax to indicate optional parameters.

//function buildName(firstName: string, lastName?: string) : string {//Named function with optional parameters
//	if (lastName)
//		return firstName + " " + lastName;
//	else
//		return firstName;
//}
//console.log( buildName("Bob"));  //works correctly because last parameter is optional
////var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
//var result4=buildName("Bob", "Adams");  //correct
////anonymous function type with optional parameters
//var buildName1 : (firstName: string, lastName?: string) => string =
//	function(firstName: string, lastName?: string) : string {
//		if (lastName)
//			return firstName + " " + lastName;
//		else
//			return firstName;
//	}


//note : The optional parameters must be the last parameters in the function definition. You can have as many optional parameters as you want, as long as non-optional parameters precede the optional parameters.


//function buildName(firstName: string, lastName = "Smith") {
//	return firstName + " " + lastName;
//}
//
//var result1 = buildName("Bob");  //works correctly now, also
//alert(result1);
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
//alert(result2);
//var result3 = buildName("Bob", "Adams");  //ah, just right
//alert(result3);

//note : share the same type "(firstName: string, lastName?: string)=>string". The default value of the default parameter disappears, leaving only the knowledge that the parameter is optional.

//Default parameters

// Note that using the default parameter syntax will automatically make the parameter optional.

//function buildName(firstName: string, lastName = "Khan") : string {//Named function with optional parameters
//	if (lastName)
//		return firstName + " " + lastName;
//	else
//		return firstName;
//}
//
//var result1 = buildName("Bob");  //works correctly because last parameter is optional
//alert(result1);
////var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
//var result3 = buildName("Bob", "Adams");  //correct
//
////anonymous function type with defult parameters (Note that the parameter type will be optional even with defult value)
//var buildName1 : (firstName: string, lastName?: string) => string =
//	function(firstName: string, lastName = "Khan") : string {
//		if (lastName)
//			return firstName + " " + lastName;
//		else
//			return firstName;
//	}

//Rest Parameters

// Rest parameters can be used in any function be it function/()=>/class member.

//you may not know how many parameters a function will ultimately take. In JavaScript, you can work with the arguments direction using the arguments variable that is visible inside every function body

//function buildName(firstName: string, ...restOfName: string[]) {
//	return firstName + " " + restOfName.join(" ");
//}
//
//var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


//function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
//	return firstName + " " + restOfName.join(" ");
//}
//
//var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
//
//
//
//
////anonymous function type with Rest parameters
//var buildNameFun: (fname: string, ...rest: string[])=>string =
//	function (firstName: string, ...restOfName: string[]) {
//		return firstName + " " + restOfName.join(" ");
//	}

			/* lambda expression  or fat arrow function
 //You don't need to keep typing function
 //It lexically captures the meaning of this
			 var add = (a: number, b: number) => {
			 return a + b;
			 }

			 var add1 = (x: number, y: number) => (x + y);

			 var myFunction = f => { this.x = "x"; }//automatically creating the that-equals-this pattern
above line of code same execute like this
			 var _this = this;
			 var myFunction = function (f) {
			 _this.x = "x";
			 };
*/


					// Call back functions
//A callback function is a function that is passed into another function


//       function overloads
//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
//function add(arg1: string, arg2: string): string;//option 1
//function add(arg1: number, arg2: number): number;//option 2
//function add(arg1: boolean, arg2: boolean): boolean;//option 3
//function add(arg1: any, arg2: any): any {//this is not part of the overload list, so it only has three overloads
//	return arg1 + arg2;
//}
//
////Calling 'add' with any other parameter types would cause an error except for the three options
//console.log(add(1, 2)); //3
//console.log(add("Hello", "World"));//HelloWorld
//console.log(add(true, false)); //true
//console.log(add(true, 2));  //3
//console.log(add(1,false));  //1


