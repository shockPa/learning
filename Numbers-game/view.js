function updateView(){
    let html = "";
    html += drawCell();
    document.getElementById('app').innerHTML = html;
}

function drawCell() {
    let cell = '<div class="squareGrid">';
    for (let i = 0; i<9; i++) {
        cell += `<div class="cell" onclick="clickMe(${i})">${i}</div>`;
        console.log(i);
    }
    cell += '</div>';
    return cell;
}


/*
    MVC -> hvordan generere HTML.
        Hvordan kan vi legge til HTML i #app -> <div id="app"> ?    
            - Vi må følge MVC-patternet som vi har lært om.
            - All HTML skal legges til ved å "kun" gjøre   
                document.getElementById('app').innerHTML = `...`;
            ..1 gang.

    Lage en funksjon:
        1. har vi påkallt minFunksjon?
        2. returnerer minFunksjon() noen verdi?
        3. lagrer vi den returnerte verdien fra minFunksjon() i en variabel?

    
    legge til html ved hjelp av en LOOP:
        1. har vi deklarert en variabel først, som kan lagre det vi legger til inni loopen?
        2. har vi brukt riktig operator inni loopen, altså += istedet for = ?

        
    Hvorfor vises ikke HTML?
        1. krever HTML en verdi inni tag?
        2. har vi sjekket CSS regler for HTML "display: none;"" etc.
    
    Hvorfor blir ikke variabel vist i HTML?
        1. starter (og slutter) strengen med backtic -> ``
        2. har vi riktig syntax, eksempel: `Hei ${myName}`;

    CSS syntax
        i css fil:
        .someClassName {
            valgA: verdiA;
            valgB: verdiB;
        }

        i html:
        <div style="valgA: verdiA; valgB: verdiB;"></div>
*/