const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

//1
const elemento = elementosFake[0]
for (let propriedade in elemento) {
  console.log(propriedade + ":", elemento[propriedade]);
}

//2
for (let elemento of elementosFake){
    if(elemento.style.color === "blue"){
        console.log(`O elemento ${elemento.tagName} é azul`);
    }
}

//5
elementosFake.forEach(elemento => {
  console.log(
    `Tag: ${elemento.tagName} Quantidade de classes: ${elemento.classList.length} Classes: ${elemento.classList.join(', ')}`
  );
});