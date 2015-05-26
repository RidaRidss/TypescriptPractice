/*this code will add object properties by using "Any" */
//
//var obj :any = { name : "Rida" , age : 21 };
//obj={qualification:"BCS", class:"Module B"};
/*Checking Of Duck Typing*/
/* This code will also add object properties without adding "Any" */
//var obj = { name : "rida" , age : 21 };
//obj = { name : "Rida" , age : 21 , qualification:"BCS", class:"Module B" }
/*Arrays*/
var numArr = [1, 2, 3, 4, 5, 6];
var anyArr = [1, 2, 3, "Rida"];
alert(numArr.pop[5]);
alert(numArr.pop[4]);
alert(numArr.pop[3]);
alert(numArr.pop[2]);
alert(numArr.pop[1]);
alert(numArr.pop[0]);
alert(anyArr.pop[5]);
alert(anyArr.pop[4]);
alert(anyArr.pop[3]);
alert(anyArr.pop[2]);
alert(anyArr.pop[1]);
alert(anyArr.pop[0]);
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
