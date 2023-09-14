function main() {
  updateView();


  for (const number of myArray) {
    console.log(number + ' hello');
  }
  myArray.push(9); // dytte inn ny verdi på slutten
  myArray.pop();   // fjerne siste verdi
  myArray[3] = 6;  // sette index 3 = 6
  myArray.splice(2, 1); // denne fjerne index 2
  console.log(myArray);
}