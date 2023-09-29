// Oppgave
// Lag en funksjon som returnerer en liste med hvert sjuende tall fra 100 til 1000
// 100, 107, 114...


// model
let numbers = [100];
let myAryNumber = [1, 2];
let myObjNumber = {};
let combinedPower = 0;

// view
function updateView(){
 for(let i = 0; i < numbers.length; i++){
    const numberList = numbers[i]


    
    document.getElementById('app').innerHTML += /*HTML*/ `
    <li>
    ${numberList} </br>
    ${myAryNumber}</br>
    
    <button onclick="pushNumbers()" style="padding: 10px; color: blue;">pushNumbers</button></br>
    <button onclick="addHundred()" style="padding: 10px; color: goldenrod;">addHundred</button></br>
    <button onclick="printNumberAry()" style="padding: 10px; color: green;">printNumberAry</button>
    
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
    let firstIndex = numbers[0];

    console.log(firstIndex);
    updateView();
}

function printNumberAry(){
    for (let i=0; i<9; i++) {
       myAryNumber;
        updateView();
      }
    return combinedPower;

}