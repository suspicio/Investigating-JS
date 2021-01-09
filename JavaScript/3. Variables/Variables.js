/*****
 * In this file are described all types of variables and differences between them
 * 
 * To run this file run 'node Variables.js' command in you cmd (Terminal) or
 * Connect this file to any html document and check console in browser
 * 
 * 
 * What is variable? 
 * 
 * variable is named storage of data
 *****/


/******
 * Types of variables: 
 * 
 * let, var, const
 */


/**************************************************************************************************************
 * 'let' type of variable
 * 
 * this type of variable creates a storage with some name(you choose) in the local scope
 * 'let' can be used only in the scope that it defined or in the nested ones
 * 'let' variable could store anything you want, and could be reassigned
 * 
 * Examples:
 **************************************************************************************************************/

let message = 'This is variable'; // Could be assigned any value

/**
 * Will handle an error - 
 * 
 * let message = 'This is another message'; 
 * 
 * This is wrong since we already have variable with the same name in this scope.
 * Compiler just cannot distinguish them.
 */

/**
 * console.log() special command that prints data in the console promt (terminal for Mac or Linux)
 */

console.log(message); //Everything is fine. Variable will be printed

//nested space
if (true) {
    console.log(message);//Everything is fine. Variables could be accessed from greater scope

    let insideMessage = 'This is inside message';
    console.log(insideMessage);// Everything is fine. Variable is in the same scope
}

//nested space 
if (true) {
    /**
     * Notice if we will try to access message before the initializing it inside the scope it will cause an error.
     * 
     * console.log(message); Will cause an error
     */

    let message = 'This is new variable'; //Created in the local scope. For next call in this scope will be used this variable
    console.log(message);//local 'message' variable is used
}

/**
 * Will handle an error - 
 * console.log(insideMessage);
 * 
 * The variable was deleted in the end of the 'if' scope, so it could not be accessed
 */

message = 25;// Reassigning the variable
console.log(message);// Will print 25



/**************************************************************************************************************
 * 'const' type of variable
 * 
 * Could not be reassigned
 * Used in case if the program should change the variable
 * All other properties are the same with 'let' type of variables
 * 
 * Examples:
 **************************************************************************************************************/

const birthDate = '01.01.1970'; // Constant variable that could not be reassigned 

console.log(birthDate); //Will print '01.01.1970'

/**
 * Will handle an error -
 * birthDate = '02.02.1971'
 * 
 * 'const' could not be reassigned
 * 
 */

const COLOR_RED = "#FF0000"; //ordinary constants used in the upper register

let color = COLOR_RED; //'const' also used to store some values that very hard to remember.
console.log('color : ', color);
// Much more easier to remind 'COLOR_RED' than '#FF0000'

/**
 * 'const' could assigned to predefined values like in 'COLOR_RED' case, or could be calculated in run time
 */

const timeStarted = Date.now();
console.log('timeStarted : ' + timeStarted);


/**
 * Notice that 'const' does not allow reassign but allows internal change
 * this works with objects and classes.
 *
 * Example:
 */

const someObject = {
    prop1: 'prop1',
    prop2: 'prop2'
};

someObject.prop1 = 'new value';

console.log('someObject : ', someObject);




/**************************************************************************************************************
 * 'var' type of variable
 * 
 * Old style type of variable 
 * Initialize a variable during compilation
 * Could be accessed everywhere
 * Scope is not for 'var'
 * 
 * Example: 
 **************************************************************************************************************/

if (true) {
    var test = true; // initialize test with 'var'
    let anotherTest = false; // initialize test with 'let'
  }
  
  console.log(test); // true, it is exists outside of 'if' scope
  //console.log('anotherTest :>> ', anotherTest); will handle an error

  for (var i = 0; i < 10; i++) {
    // ...
  }
  
  console.log(i);// 10, it is exists outside of 'for' scope 


  stillExists = 'This one is exists'//Could be initilaized before creating the variable

  if (false) {
      var stillExists;
  }

  console.log('stillExists :>> ', stillExists);// will print 'This one is exists'