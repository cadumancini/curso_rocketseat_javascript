// Exercícios 01 e 02:
var container = document.querySelector('#app');
var button = document.querySelector('button');

function draw(color) {
  var boxElement = document.createElement('div');
  boxElement.style.width = 100;
  boxElement.style.height = 100;
  boxElement.style.backgroundColor = '#FC0303';
  boxElement.onmouseover = function() {
    boxElement.style.backgroundColor = getRandomColor();
  }
  
  container.appendChild(boxElement);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) 
    color += letters[Math.floor(Math.random() * 16)];
  
  return color;
}

button.onclick = function() {
  draw(getRandomColor());
}

// Exercício 03:
var nomes = ["Diego", "Gabriel", "Lucas"];
var listElement = document.createElement('ul');
for(nome of nomes) {
  var itemElement = document.createElement('li');
  var text = document.createTextNode(nome);
  itemElement.appendChild(text);
  listElement.appendChild(itemElement);
}
container.appendChild(listElement);

// Exercício 04:
var inputElement = document.querySelector('#app input');
function adicionar() {
  var novoNome = inputElement.value;
  nomes.push(novoNome);
  inputElement.value = '';

  listElement.innerHTML = '';
  for(nome of nomes) {
    var itemElement = document.createElement('li');
    var text = document.createTextNode(nome);
    itemElement.appendChild(text);
    listElement.appendChild(itemElement);
  }
}