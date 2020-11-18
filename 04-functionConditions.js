// Create a function that takes in one argument that is passed through a conditional statement.
// (For example, something like our haunted house door() function.)
// Print some resulting text to the console.
// Test all of your conditions to make sure you can receive all of your results back.

function colorRainbow(num) {
  if (num == 1){
    return "red";
  }
  else if (num == 2){
    return "orange";
  }
  else if (num == 3){
    return "yellow";
  }
  else if (num == 4){
    return "green";
  }
  else if (num == 5){
    return "blue";
  }
  else if (num == 6){
    return "indigo";
  }
  else if (num == 7){
    return "violet";
  }
}

console.log(colorRainbow(1));
console.log(colorRainbow(2));
console.log(colorRainbow(3));
console.log(colorRainbow(4));
console.log(colorRainbow(5));
console.log(colorRainbow(6));
console.log(colorRainbow(7));
