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
//if(c == a){
//alert("Yes c = = a");
//}
//else{
//	alert("No, c is not equal to a");
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



/* self calling anonyms function , it will create , call , execute and end at the same time or at (line no. 154) */

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
		// fn2 = function(){
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
			let a = {id:1,name:"rida"}
			a = {id:1,name:"abc",class:"a"}
			a={id:1,name:"rida",lastname:"DAB"}
			console.log(a);