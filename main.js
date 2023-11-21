// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

const avaliacao = [
  { nome: 'Angelo', nota: 8, },
  { nome: 'Gustavo', nota: 4, },
  { nome: 'Luiz', nota: 3, },
  { nome: 'Eduardo', nota: 5, },
  { nome: 'Sergio', nota: 7, },
  { nome: 'Gabriela', nota: 10, },
  { nome: 'Luiza', nota: 6, },
  { nome: 'Flavia', nota: 2, }
]

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

const alunosAprovados = () => {
  console.log('Os seguintes alunos foram aprovados:')
  for (let i = 0; i < avaliacao.length; i++) {
    if (avaliacao[i].nota >= 6) {
      console.log(`Nome: ${avaliacao[i].nome} - Nota: ${avaliacao[i].nota}`)
    }
  }
}

alunosAprovados();