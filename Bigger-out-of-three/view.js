function updateView(){
    document.getElementById('app').innerHTML = `
    <input placeholder="x" oninput="x = this.value"></input>
    <input placeholder="y" oninput="y = this.value"></input>
    <input placeholder="z" oninput="z = this.value"></input>
    <h2>${bigger == "" ? 'Got something yet?' : bigger }</h2>
    <button onclick="threeNumbers()">Check</button>
    `
}