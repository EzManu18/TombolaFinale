let righe = 10;
let colonne = 10;
let numeriEstratti = [];

function DisegnaTabella() {

    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);

}

DisegnaTabella();

function estrai() {
    let num;
    do {
        num = Math.floor(Math.random() * 90) + 1; //generazione numero casuale
    } while (numeriEstratti.includes(num)); 
    numeriEstratti.push(num);
    
    var caselleTabella = document.getElementsByTagName("td"); //array contenente tutte le caselle

    let casella = caselleTabella[num-1]; //metto il numero nella casella con index = al numero estrato
    casella.textContent = num; //scrivo nella tabella
}