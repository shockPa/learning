
function moveCommandToProgram(id){
    model.game.runtime.program.commands.push({
        commandId : id,
        isSuccess : null,
        inProgram : true,
        
    });
    resetProgramButtonStates();
    resetPlayerPosition();
    updateView();
}
function removeCommandFromProgram(index){
    model.game.runtime.program.commands.splice(index, 1)
    for(let command of model.game.runtime.program.commands){
        command.isSuccess = false;
    }
    resetPlayerPosition()
    resetProgramButtonStates();
    updateView();
}

function resetProgramList(){
    model.game.runtime.program.commands = []
    resetPlayerPosition()
    updateView()
}

function resetPlayerPosition(){
    model.game.runtime.player.index = model.game.runtime.board.characterStartIndex;
    model.game.runtime.player.direction = model.game.runtime.board.startDirection;
}

function runProgram(){
    //Go through the program list of commands
    moveCharacter();
}

function resetProgramButtonStates(){
    for(let command of model.game.runtime.program.commands){
        command.isSuccess = false;}
    }


   
let charPositionX = 0;
let charPositionY = 0;
let charDistance = 6;
const speed = 0.01;
function moveCharacter(){
    let newX = charPositionX - charDistance;
    let newY = charPositionY + Math.sin(charPositionX * speed) * charDistance;

    // Apply the new position to the character's style
    canvasRookie.style.left = newX + 'px';
    

    // Update the current position
    charPositionX = newX;
    charPositionY = newY;
}

/* function moveCharacter(i){
    commandList = model.game.runtime.program.commands;
    levelInfo = model.game.boards[model.game.runtime.currentLevel];
    playerIndex = model.game.runtime.player.index;
    characterDir = model.game.runtime.player.direction;

    
        if(commandList[i].commandId == 0){ //Gå fram
            if(characterDir == 0){
                model.game.runtime.player.index -=7;
                playerState = 'walkUp';
            }else if(characterDir == 1){
                model.game.runtime.player.index +=1;
                playerState = 'walkRight';
            }else if(characterDir == 2){
                model.game.runtime.player.index +=7;                
                playerState = 'walkDown';
            }else if(characterDir == 3){
                model.game.runtime.player.index -=1;
                playerState = 'walkLeft';
            }
            
        }else if(commandList[i].commandId == 1){ //Snu venstre
            turnLeft();
        }else if(commandList[i].commandId == 2){//Snu høyre
            turnRight();
        }else if(commandList[i].commandId == 3){//Plukk opp
            pickUpItem();
        }else if(commandList[i].commandId == 4){//Bruk
            useItem();
            }
        

       // console.log("direction: "+model.game.runtime.player.direction)
    }
  */  
//     }
// }
//index = (maxNr + index) % maxNr

function pickUpItem(){
    //pick up item on index in paths[inventory.itemOnIndex]
    //add item to players "inventory" window, bottom of the gameWindow
}
function useItem(){
    //use item on index in paths[]
    
}
function moveForward(){
    
}

function turnRight(){
    model.game.runtime.player.direction -= 1;
    model.game.runtime.player.direction = (4 + model.game.runtime.player.direction) % 4;
    console.log(model.game.directions[model.game.runtime.player.direction]);
}

function turnLeft(){
    model.game.runtime.player.direction += 1;
    model.game.runtime.player.direction = (4 + model.game.runtime.player.direction) % 4;
    console.log(model.game.directions[model.game.runtime.player.direction]);
}


function changeLevel(level) {
    if (confirm("Forlat levelet?")) {
        let levelId = level - 1; //level 1 = index 0
        model.game.runtime.currentLevel = levelId;
        resetProgramList()
        initializeLevel();
        updateView();
    }
}

function toggleTestMode(){
    model.app.isTesting = !model.app.isTesting;
    updateView()
}

function RNG(max) {
    let number = Math.floor(Math.random()*max);
    return number
}