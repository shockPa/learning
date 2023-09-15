for (let i=0; i<9; i++) {
  console.log(i);
}

if (true === true) {
  console.log('TRUE')
} else if (true === true) {
  console.log('OTHER TRUE')
} else {
  console.log('FALSE')
}


// LIST ITERATION
let myDinner = ['pizza', 'burger', 'tacos'];
for (const meal of myDinner) {
  console.log(meal);
}

// funksjon som returnerer verdi
function simpleFunction(name) {
    let myVariable = '';
    myVariable += 'Hello ' + name;
    return myVariable;
}

// endre variabel "selectedDrink" med hjelp av for loop
let myDrinks = ['solo', 'cola', 'fanta'];
let selectedDrink = '';
for (let i=0; i<9; i++) {
  if (myDrinks[i]) ==  'cola'{
    selectedDrink = myDrinks[i];
  }
  console.log(selectedDrink);
}
