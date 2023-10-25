"use strict";


function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div><h1>${model.app.gameTitle}</h1><div class="gameWindow">${generateGameWindow()}</div></div>
        ${generateProgramWindow()}
        ${generateCommandsWindow()}
        ${generateLevelsWindow()}
    `;
    getCanvas()
}

function initializeLevel() {
    model.game.runtime.board = JSON.parse(JSON.stringify(model.game.boards[model.game.runtime.currentLevel]));
    model.game.runtime.player.direction = model.game.runtime.board.startDirection;
    model.game.runtime.player.index = model.game.runtime.board.characterStartIndex;
    model.game.runtime.board.backgroundImagesCache = [];
    model.app.pathObject = {};
}

function generateGameWindow() {
    const game = model.game;
    const board = game.runtime.board;
    const pathArray = board.paths;
    const playerIndex = model.game.runtime.player.index;
    let gameWindowHtml = '';
    let backgroundImage;
    //console.log('%c------------------------', 'color: red; font-size: 28px;');
    //console.log("pathArray: "+pathArray);
    for (let i = 0; i < 7 ** 2; i++) {
        backgroundImage = board.backgroundImagesCache.length === 49 ? board.backgroundImagesCache[i] : getBackgroundImage(i);
        let flag = board.finishIndex === i ? game.flagImage : '';
        //let player = game.boards[currentBoard].characterStartIndex === i ? game.playerImage : '';
        let player = playerIndex === i ? `<canvas style="top: ${model.game.runtime.player.marginTop + 50}%; left: ${model.game.runtime.player.marginLeft + 50}%" id="canvasRookie"></canvas>` : '';
        gameWindowHtml += /*HTML*/ `
            <div class="gridBlock" style="background-image: url(${backgroundImage})">
                <div class="gridNumber">${model.app.isTesting ? i:""}</div>
                <div class="gridImage"><img src="${flag} ${getItems(i)}"> ${player}</div>
            </div>
        `;
    }
    //console.table(model.app.pathObject)
    return '<div class="gameGrid">' + gameWindowHtml + '</div>';
}

function getBackgroundImage(index) {
    const game = model.game;
    const pathArray = game.runtime.board.paths;
    const pathwayImages = game.pathwayImages;

    let pathIndex = pathArray.indexOf(index);
    let nextPathDiff = pathArray[pathIndex + 1] - index;
    let lastPathDiff = pathArray[pathIndex - 1] - index;
    let totalDiff = nextPathDiff + lastPathDiff;
    if (pathArray.includes(index)) model.app.pathObject[index] = {pathIndex, nextPathDiff, lastPathDiff, totalDiff};

    const diff = totalDiff;
    const pi = pathwayImages;
    const next = nextPathDiff;
    const last = lastPathDiff;

    let image =  pathIndex === -1 ? game.backgroundImages[RNG(game.backgroundImages.length)]
        : diff === 8 ? pi.turnSE
        : diff === 6 ? pi.turnSW
        : diff === -8 ? pi.turnNW
        : diff === -6 ? pi.turnNE
        : diff === 0 ? (Math.abs(next) === 1 ? pi.vertical : pi.horizontal)
        : next === 1 || last === 1 ? pi.endW
        : next === -1 || last === -1 ? pi.endE
        : next === 7 || last === 7 ? pi.endN
        : next === -7 || last === -7 ? pi.endS
        : game.backgroundImages[-1];
    game.runtime.board.backgroundImagesCache.push(image);
    return image;
}

function getItems(index) {
    const board = model.game.runtime.board;
    const inventory = board.inventory
    let item = '';
    if (inventory.length === 0) return item;
    for (let j=0; j<inventory.length; j++) {
        if (inventory[j].indexOnBoard === index && !inventory[j].pickedUp) {
            item = inventory[j].iconUrl;
        }
    }
    return item;
}

function generateProgramWindow() {
    let programList = [...model.game.runtime.program.commands];
    let programHTML = `<div><h1>Program</h1><div class="programWindow" }px;">`
    let btnText = "";
    for (let i = 0; i < programList.length; i++) {
        btnText = model.game.commands[programList[i].commandId]
        programHTML += `
        <button id="${i}" 
        class="${programList[i].isSuccess ? "codeButtonSuccess" : "codeButtonProgram"}"
        onclick="removeCommandFromProgram(${i})"
        >${programList[i].isSuccess ? btnText.jsName : btnText.name}</button>`
    }
    programHTML += /*HTML*/`
        <div class="programControlButtons">
        <button ${model.game.runtime.program.commands.length == 0 ? "disabled":""} class="resetButton" onclick="resetProgramList()">↺</button>
        <button ${model.game.runtime.program.commands.length == 0 ? "disabled":""} class="runProgramButton" onclick="runProgram()">⏵</button>
        </div></div></div>`
    return programHTML;
}


function generateCommandsWindow() {
    let commandList = [...model.game.levels[model.game.runtime.currentLevel].availableCommands];
    let commandsHTML = `<div><h1>Commands</h1><div class="commandsWindow" ">`

    for (let i = 0; i < commandList.length; i++) {
        commandsHTML += `<button id="${commandList[i]}" class="codeButtonDefault" onclick="moveCommandToProgram(${commandList[i]})">${model.game.commands[i].name}</button>`
    }
    commandsHTML += `</div></div>`
    return commandsHTML;

}

function generateLevelsWindow() {
    const currentLevel = model.game.runtime.currentLevel;
    let levelHTML = /*HTML*/ `
        <div>
            <h2 class="levelsHeader">Levels</h2>
            <div class="levelsWindow">
            <button class="${currentLevel != 0 ? "levelButton" : "levelButtonDisabled"}" onclick="changeLevel(1)">1</button>
            <button class="${currentLevel != 1 ? "levelButton" : "levelButtonDisabled"}" onclick="changeLevel(2)">2</button>
            <button class="${currentLevel != 2 ? "levelButton" : "levelButtonDisabled"}" onclick="changeLevel(3)"> 3</button>
            <button class="${currentLevel != 3 ? "levelButton" : "levelButtonDisabled"}" onclick="changeLevel(4)">4</button>
            <button class="${currentLevel != 3 ? "levelButton random" : "levelButtonDisabled"}" onclick="changeLevel(5)">Random</button>
        </div></div>
    `;
    return levelHTML;
}