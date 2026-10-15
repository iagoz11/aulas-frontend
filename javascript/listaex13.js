function frete(valorCompra) {
    return valorCompra >= 100 ? "Frete pago" : "Frete grátis";
};
console.log(`Frete: ${frete(150)}`);