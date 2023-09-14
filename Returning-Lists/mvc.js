// Oppgave
// Lag en funksjon som returnerer en liste med hvert sjuende tall fra 100 til 1000
// 100, 107, 114...


// model
let numbers = [100]
// view
function updateView(){
 for(let i = 0; i < numbers.length; i++){
    const numberList = numbers[i]
    document.getElementById('app').innerHTML += /*HTML*/ `
    <li>
    ${numberList}
    <button onclick="pushNumbers()">Push</button>
    <button onclick="addHundred()">Push</button>
    </li>
    `
  
    
 }
}

// controller

// 100. push[i]+7
// if 1000 >= return List / break;
// for numbers 100 > 1000
// get every number +7
// numberJump[] = numbers +7
//
function pushNumbers(){
    let numberAdded = numbers.push(0);
    numbers.push(numberAdded);
    updateView();
    console.log(numberAdded);
}

function addHundred(){
    let firstIndex = numbers[0]
    firstIndex + 7;
    console.log(firstIndex);
}