const formatarReal = valor => {
  return `R$ ${valor.toFixed(2)}`;
}  

const preco = formatarReal(5); 
console.log(`Valor final: ${preco}`)