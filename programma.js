


for (const element of elementi) {
    let contenitore = document.getElementById('contenitore'); 
    contenitore.style.position = 'relative';


let cella = document.createElement('div');
cella.style.borderStyle = 'solid';
cella.style.width = '70px'
cella.style.height = '100px'
cella.style.position = 'absolute'
cella.style.left = element.xpos * 70 + 'px';
cella.style.top = element.ypos * 120 + 'px'
cella.style.backgroundColor = '#' + element['cpk-hex']

let numeroAtomico = document.createElement ('p'); 
numeroAtomico.innerText = element.number;
cella.appendChild(numeroAtomico);

let simbolo = document.createElement('a');
simbolo.innerText = element.symbol;
simbolo.href = element.source;
cella.appendChild(simbolo);
simbolo.style.fontsize = '24px'
simbolo.style.fontWeight = 'bold'
simbolo.style.color = 'black';

let nome = document.createElement('p'); 
nome.innerText = element.name;
cella.appendChild(nome);

contenitore.appendChild(cella);
} 

