function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function fromValueToCoins(value){
    let coinsList = [0,0,0,0]
    console.log("value = "+value)
    //Her skal verdien, for eksempel 13, resultere i en liste [3,0,1,0] 3 enere, 0 femmere, 1 tier, 1 x 20kr;
    while(value != 0){
        if(value >= 20){
            coinsList[3] += 1;
            value -=20;
            continue;
        }if(value >= 10){
            coinsList[2] += 1;
            value -=10;
            continue;
        }if(value >= 5){
            coinsList[1] += 1;
            value -=5;
            continue;
        }if(value >= 1){
            coinsList[0] += 1;
            value -=1;
            continue;
        }
}


    return coinsList;
    
}