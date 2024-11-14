
let idrogeno = {};

idrogeno.simbolo = 'H'
idrogeno.numero = 1;
idrogeno.nome = 'idrogeno'

let elio = {};

elio.simbolo = 'HE';
elio.numero = 2;
elio.nome = 'Elio'; 

let litio = {};

litio.simbolo = 'li';
litio.numero = 3;
litio.nome = 'Litio'; 

let elementi = [idrogeno, elio];

for (const element of elementi) {
    let contenitore = document.getElementById('contenitore'); 


let cella = document.createElement('div');
cella.style.borderStyle = 'solid';
cella.style.width = '70'

let numeroAtomico = document.createElement ('p'); 
numeroAtomico.innerText = element.numero;
cella.appendChild(numeroAtomico);

let simbolo = document.createElement('a');
simbolo.innerText = element.simbolo;
cella.appendChild(simbolo);

let nome = document.createElement('p'); 
nome.innerText = element.nome;
cella.appendChild(nome);

contenitore.appendChild(cella);
} 

