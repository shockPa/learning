

function buyCoke() {


    let coinsValue = valueFromCoinCounts(coinsInserted);
    console.log(coinsValue);
    if(coinsValue >= priceOfCoke){
        cokesInStore--
        isCokeInDelivery = true;
        coinsValue -= priceOfCoke
        coinsInserted = fromValueToCoins(coinsValue);
        returnCoins();   
    }
    updateView();
}

function canBuyCoke(){
    // sjekker om det er cola i automat
    //
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
    updateView()
}

function takeCoins(){
 pocketChange = valueFromCoinCounts(coinsReturned);
    updateView();
}


function insertCoin(value){
    const index = 
        value == 1 ? 0 : 
        value == 5 ? 1 : 
        value == 10 ? 2 : 
        value == 20 ? 3 : 
        null;
    coinsInserted[index]++;
    updateView();
}



function returnCoins(){
    coinsReturned = [...coinsInserted];
    //Om det er 15kr til overs, skal den gi ut 1 tier, og 1 femmer, 
    coinsInserted = [0,0,0,0];
    updateView();
}