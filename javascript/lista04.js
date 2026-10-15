const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

console.log(usuariosAtivos);

const produtos = [
    { nome: 'Teclado', preco: 100 },
    { nome: 'Mouse', preco: 50 }
  ];
  
  const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9
  }));
  
  console.log(produtosComDesconto);

  const carrinho = [25.50, 10.00, 100.00, 5.00];

const total = carrinho.reduce((soma, preco) => soma + preco, 0);

console.log(total);

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(array) {
  return [...new Set(array)];
}

const nomesSemDuplicatas = limparLista(nomesRepetidos);

console.log(nomesSemDuplicatas);

const apiProdutos = [
    { id: 101, nome: 'monitor led', preco: 899.9 },
    { id: 102, nome: 'teclado mecanico', preco: 250.0 },
    { id: 103, nome: 'mouse gamer', preco: 125.45 }
  ];
  
  const produtosFormatados = apiProdutos.map(produto => ({
    ...produto,
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: `R$ ${produto.preco.toFixed(2)}`
  }));
  
  console.log(produtosFormatados);