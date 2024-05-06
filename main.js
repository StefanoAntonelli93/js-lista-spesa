'use strict'
console.log('buonasera');
// - creo lista spesa
const listaSpesa = ['pane','latte','uova','farina','pasta','tonno','pesto','zucchero','sale','olio'];
console.log(listaSpesa);
// - creo variabile contatore di partenza e gli assegno valore = 0 (count=0)

let count = 0;
console.log(count);
// - in HTML creo una lista ul con id='list'
// - prendo l'elemento con id 'list' e lo associo ad una variabile (ul) con getElementById

const ul = document.getElementById('list');

// - creo un ciclo while che si esegue finchè non identifica ogni prodotto della lista
// WHILE finchè contatore è minore della lunghezza della lista della spesa allora esegui ciclo

while (count < listaSpesa.length) {
    // - creo elemento (li)

    const li = document.createElement('li');

    // - sostituisco il contenuto di li con gli indici della lista (li.innerText)

    li.innerText = listaSpesa[count];

    // - aggancio alla ul gli li creati con append

    ul.append(li);
    

    // - incremento il ciclo (count++)
    count++;
}

console.log(`la lista della spesa ha ${count} prodotti da acquistare`);






// - stampo sulla pagina il risultato