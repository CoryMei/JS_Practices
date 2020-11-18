// Create an array of strings and use random() to select random entries and add them to a sentence, printing the result to the console.

var array = ["Korean food", "Chinese food", "Thai food", "Japanese food", "Indian food"]
var randomEntry = array[ Math.floor( Math.random() * array.length ) ]
console.log("My favorite food is " + randomEntry + "!");
