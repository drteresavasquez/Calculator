console.log("calculator.js, yo!");

//pull the IDs from the input elements to evaluate
let numberOne = document.getElementById("number-one");
let numberTwo = document.getElementById("number-two");

//basic mathematical functions on BUTTONS
let addition = document.getElementById("add");
let subtraction = document.getElementById("subtract");
let multiplication = document.getElementById("multiply");
let division = document.getElementById("divide");

//place to output the answer once evaluated using the mathmatical functions
let answer = document.getElementById("solution");
// let symbol = document.getElementById("symbol");


//with this, I wanted the number entered to be displayed in the HTML to give the feel of an acutal calculator
	numberOne.addEventListener("keyup", function(numOne){
		numberoneinput.innerHTML = numOne.target.value;
	});

	numberTwo.addEventListener("keyup", function(numTwo){
		numbertwoinput.innerHTML = numTwo.target.value;
	});

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyIt(m){
	let inputOne = Number(numberOne.value);
	let inputTwo = Number(numberTwo.value);

	if ((inputOne === 0 || inputTwo === 0) || (inputOne === 0 && inputTwo === 0)){
            		alert("Please enter a value in both fields, Yo!");
       			}
	
	else {let answerText = inputOne * inputTwo;
	answer.innerHTML = ` = ${answerText}`};
}

multiplication.addEventListener("click", multiplyIt);

//this allows the user to see which button/mathmatical evaluator was selected
	multiplication.addEventListener("click", function(m){
		// console.log("m", m);
		symbol.innerHTML = "*";
	});



/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function addIt(m){
	let inputOne = Number(numberOne.value);
	let inputTwo = Number(numberTwo.value);

	if ((inputOne === 0 || inputTwo === 0) || (inputOne === 0 && inputTwo === 0)){
            		alert("Please enter a value in both fields, Yo!");
       			}
	
	else {let answerText = inputOne + inputTwo;
	answer.innerHTML = ` = ${answerText}`};
}
addition.addEventListener("click", addIt);

//this allows the user to see which button/mathmatical evaluator was selected
	addition.addEventListener("click", function(a){
		// console.log("a", a);
		symbol.innerHTML = "+";
	});

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtractIt(m){
	let inputOne = Number(numberOne.value);
	let inputTwo = Number(numberTwo.value);

	if ((inputOne === 0 || inputTwo === 0) || (inputOne === 0 && inputTwo === 0)){
            		alert("Please enter a value in both fields, Yo!");
       			}
	
	else {let answerText = inputOne - inputTwo;
	answer.innerHTML = ` = ${answerText}`};
};

subtraction.addEventListener("click", subtractIt);

//this allows the user to see which button/mathmatical evaluator was selected
	subtraction.addEventListener("click", function(s){
		// console.log("s", s);
		symbol.innerHTML = "-";
	});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divideIt(m){
	let inputOne = Number(numberOne.value);
	let inputTwo = Number(numberTwo.value);

	if ((inputOne === 0 || inputTwo === 0) || (inputOne === 0 && inputTwo === 0)){
            		alert("Please enter a value in both fields, Yo!");
       			}
	
	else {let answerText = inputOne / inputTwo;
	answer.innerHTML = ` = ${answerText}`};
};

division.addEventListener("click", divideIt);
//this allows the user to see which button/mathmatical evaluator was selected
	division.addEventListener("click", function(d){
		// console.log("d", d);
		symbol.innerHTML = " / ";
	});



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */