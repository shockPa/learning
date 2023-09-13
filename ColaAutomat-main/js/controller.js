function buyCoke() {

    let coinsValue = valueFromCoinCounts(coinsInserted);
    console.log(coinsValue);
    let coins = [...coinsInserted]

    if(coinsValue >= priceOfCoke){
        cokesInStore--
        isCokeInDelivery = true;
        coinsValue -= priceOfCoke
        coinsInserted = fromValueToCoins(coinsValue);
        for(let i = 0; i < coins.length;i++){
            coinsInMachine[i] += coins[i];
        }
        
        returnCoins();   
    }
    updateView();
}

function canBuyCoke(){

    if(cokesInStore == 0 || valueFromCoinCounts(coinsInserted) < 25 || isCokeInDelivery){
        return false;
    }else{
        return true;
    }
}

function takeCoke(){
    //fjern cola fra utkast
    if(!isCokeInDelivery) return;
    isCokeInDelivery = false;
    numberOfCokesPurchased++;
    emptyCokeCans();
    updateView();
}

function takeCoins(){
    pocketChange += valueFromCoinCounts(coinsReturned);
    coinsReturned = [0,0,0,0]
    updateView();
}


function insertCoin(value){
    if(valueFromCoinCounts(coinsInserted) >= 50){
        alert('Hey there stop! I\'d adivse you to pick your next coin of choice carefully!');
        return;
    }else{
    const index = 
        value == 1 ? 0 : 
        value == 5 ? 1 : 
        value == 10 ? 2 : 
        value == 20 ? 3 : 
        null;
    coinsInserted[index]++;
    updateView();}
}



function returnCoins(){
    let coins = [...coinsInserted]
    for(let i = 0; i < coins.length; i++){

        coinsReturned[i] += coins[i];
        coinsInMachine[i] -= coins[i];
    }

    coinsInserted = [0,0,0,0];

    updateView();
}
function canRefillCoke(){
    if(cokesInStore >= 6 || pocketChange < cokePurchasePrice){
       return false;
    }else{
        return true;
    }
    
}

function fillCoke(){
    let coins = [...coinsInserted]
        pocketChange -= cokePurchasePrice;
        cokesInStore++;
        
        updateView();
    }

function emptyCokeCans(){
    if(cokesInStore == 0){
        alert('Please put more coke in me. 5kr a piece! Pretty please.')
    }
}

// function thiefAlert(){
//     if(valueFromCoinCounts(coinsInserted) >= 50){
//         alert('Hey there stop! I\'d adivse you to pick your next coin of choice carefully!');
//     }
// }
    
