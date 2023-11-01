function Faculdade(materia, periodo, sala) {
  this.materia = materia;
  this.periodo = periodo;
  this.sala = sala;
}

function Aluno(nome, materia, periodo, sala) {
  this.nome = nome;
  Faculdade.call(this, materia, periodo, sala);
}

function Professor(nome, materia, periodo, sala) {
  this.nome = nome;
  Faculdade.call(this, materia, periodo, sala);
}

const aluno1 = new Aluno('Angelo', 'JavaScript', 'Noturno', 7);
const aluno2 = new Aluno('Lucas', 'Java', 'Manha', 10);
const professor1 = new Professor('Thais', 'BI', 'Manha', 5);
const professor2 = new Professor('Vitoria', 'React', 'Noturno', 8);

console.log(aluno1);
console.log(aluno2);
console.log(professor1);
console.log(professor2);

