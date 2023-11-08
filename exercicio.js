// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
// Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma.

class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

const gabriel = new Aluno("Gabriel Yamato", 6.5);
const iris = new Aluno("Íris Swatch", 8.4);
const rafaela = new Aluno("Rafaela Silva", 5.8);
const rodrigo = new Aluno("Rodrigo Afonso", 4.4);
const liane = new Aluno("Liane Ferreira", 6.2);
const luan = new Aluno("Luan Sawaazi", 9.2);

let alunos = [gabriel, iris, rafaela, rodrigo, liane, luan];

const aprovados = alunos.filter((aluno) => {
  if (aluno.nota >= 6) return aluno;
});

console.log(aprovados);
