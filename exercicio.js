// Crie uma classe de uma abstração;
function Comida(sabor) {
  this.sabor = sabor;
}

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
// • Crie pelo menos três instâncias de objetos;

function Fruta(sabor, cor, tamanho, preco) {
  this.cor = cor;
  this.tamanho = tamanho;
  let _preco = preco;

  this.getPreco = () => _preco;

  Comida.call(this, sabor);
}

function Prato(sabor, ingredientes, temCaldo) {
  this.ingredientes = ingredientes;
  this.temCaldo = temCaldo;

  Comida.call(this, sabor);
}

function Entrada(
  sabor,
  ingredientes,
  temCaldo,
  vegetariano = false,
  serveQuantasPessoas = 1
) {
  this.vegetariano = vegetariano;
  this.serveQuantasPessoas = serveQuantasPessoas;

  Prato.call(this, sabor, ingredientes, temCaldo);
}

const banana = new Fruta("doce", "amarela", "pequeno", 5);
console.log(banana);
console.log(banana.getPreco());

const feijoada = new Prato(
  "salgado",
  [
    "feijão preto",
    "pé de porco",
    "paio",
    "costelinha de porco",
    "louro",
    "cebola",
    "alho",
    "sal",
  ],
  true
);
console.log(feijoada);

const batataFrita = new Entrada("salgado", "batata", true, true, 4);
console.log(batataFrita);
