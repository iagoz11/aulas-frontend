//Etapa 1 Ficha do Item

let nomeItem = "Espada das Sombras";
let precoItem = 250;
let raridadeItem = "Raro";
let quantidadeEstoque = 12;

console.log(`=== FICHA DO ITEM ===
Nome: ${nomeItem}
Preço: R$ ${precoItem}
Raridade: ${raridadeItem}
Quantidade no estoque: ${quantidadeEstoque}`);

//Etapa 2 Regras de Negócio

if(precoItem >= 0) {
    console.log("Preço válido!");
} else {
    console.log("Erro! O preço não pode ser negativo.");
}

if(precoItem <= 100) {
    console.log("Raridade comum.");
} else if(precoItem < 500) {
    console.log("Raridade raro.");
} else {
    console.log("Raridade lendário.");
}

let emDestaque = precoItem > 500 ? true : false;
console.log(`Valorzinho muito alto né: ${emDestaque}`);

let disponivelCompra = quantidadeEstoque > 0 && precoItem > 0;
console.log(`Disponível para compra: ${disponivelCompra}`);

//Etapa 3 Cadastro em Lote

for (let i = 1; i <= 5; i++){
    console.log(`Item ${i} cadastrado.`);

    if(i % 2 === 0) {
        console.log(`Item topzera.`);
    }
}

//Etapa 4 Controle de Estoque

let estoque = 12;
let vendas = 0;

while (estoque > 0) {
    vendas++;
    estoque--;

    console.log(`Uma venda foi realizada. Estoque restante: ${estoque}`);
}

//Etapa 5 Catálogo de Itens

const catalogo = ["Espada das sombras", "Asas douradas", "Capacete neon", "Pet dragão", "Skin cyberpunk"];

for(const item of catalogo) {
    console.log(`Vitrine: ${item}`);
}