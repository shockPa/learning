const mil = 1000000;
const arr = Array(mil);
console.time('⏰')
arr.map(v => v).forEach(v => v)
console.timeEnd('⏰');

const equine = {horse : '🐎', tiger: '🐅', zebra : '🦓', monkey : '🐒'};

// for (const v of equine){} looping over a object is not iterable by default.
// A quick way to resolve this is to use a for( in ) loop.

for(const key in equine){
    console.log(equine[key])
}
for(const v of Object.values(equine)){
    console.log(v + ' of & object.values')
}

// when we want to loop over an object in different ways: convert it to a map.
// a map shares similiarties with an original object, except it maintains
// the order in which the keys are inserted.
const equine2 = new Map(Object.entries({horse : '🐎', tiger: '🐅', zebra : '🦓', monkey : '🐒'}));

for ( const v of equine2.values()) {
    console.log(v + ' map');
}

const faces = ['😂', '😍', '🤪', '😬', '🤬', '💩' ];

const feces = faces.filter( v => v === '💩')
const cleaned = feces.map( v => '🧠')
console.log(cleaned + ' used to be feces');

const faces2 = ['😂', '😍', '🤪', '😬', '🤬', '💩' ];
const pooCount = faces.reduce((acc, cur) => {
    return acc + (cur === '💩' ? 1 : 0)
}, 0);
console.log(pooCount + ' 💩 in this list');

const sorted = faces2.sort((a, b) => a < b);
console.log(sorted + ' these faces are sorted')
console.log(sorted.splice(3));




function updateView() {
    document.getElementById('app').innerHTML += `
    <input type="text" id="tbuser" placeholder="Your name" style="background-color: aqua"></input>
    <button id="btn1" value="click me" style="background-color: goldenrod">x</button>
    <p class="output" id"output1" style="border: 3px solid"></p>`
}

const yourName = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerHTML = yourName.value;
}

btn1.addEventListener('click', fun1);
