// Exercício 01:
console.log('Exercício 01:');
function concatenaEndereco(endereco) {
  return console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`);
}

var endereco = {
  rua: 'Rua dos Pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
}

concatenaEndereco(endereco);

// Exercício 02:
console.log('------------------------------------------------------------------');
console.log('Exercício 02:');
function pares(x, y) {
  console.log(`Exibindo pares entre ${x} e ${y}:`);
  for(var i = x; i <= y; i++){
    if(i % 2 === 0) // é par?
      console.log(i);
  }
}

pares(32, 50);

// Exercício 03:
console.log('------------------------------------------------------------------');
console.log('Exercício 03:');
function temHabilidade(skills) {
  console.log(skills.indexOf('Javascript') >= 0); // função indexOf retorna -1 se não tiver
}

var skills = ['Javascript', 'ReactJS', 'React Native'];
temHabilidade(skills);

// Exercício 04:
console.log('------------------------------------------------------------------');
console.log('Exercício 04:');
function experiencia(anos) {
  switch(anos) {
    case 0:
    case 1:
      console.log('Iniciante');
      break;
    case 2:
    case 3:
      console.log('Intermediário');
      break;
    case 4:
    case 5:
    case 6:
      console.log('Avançado');
      break;
    default:
      console.log('Jedi Master');
  }
}

var anosEstudo = 5;
experiencia(anosEstudo);

// Exercício 05:
console.log('------------------------------------------------------------------');
console.log('Exercício 05:');
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function exibeHabilidades(usuarios) {
  for(usuario of usuarios) {
    console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`);
  }
}

exibeHabilidades(usuarios);