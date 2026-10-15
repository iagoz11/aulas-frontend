function qntProduto(quantidade) {
    if(quantidade >= 5){
        console.log("Estoque normal.");
    } else {
        console.log("Etoque crítico!");
    }
}
console.log(`${qntProduto(6)}`);