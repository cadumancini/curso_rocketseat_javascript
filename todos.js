var listElement = document.querySelector("#app ul"); // de dentro de #app, pega a ul
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
];

function renderTodos(){
  listElement.innerHTML = ''; // propriedade que contem todo o HTML dentro do elemento
  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
}

buttonElement.onclick = addTodo;