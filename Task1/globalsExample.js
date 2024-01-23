// The globals in Node.js are like special tools that you can use anywhere in your program without needing to bring them in. 
//They include things like the console for printing messages and the process for controlling your program

// Setting a global variable
global.globalVar = 'Hello World';

function printGlobalVariable() {
  // Accessing the global variable
  console.log(global.globalVar);
}

// Calling the function to print the global variable
printGlobalVariable();
