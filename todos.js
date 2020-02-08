var listElement = document.querySelector("#app ul"); // de dentro de #app, pega a ul
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// se não tiver nada no array e não conseguir retornar um vetor,
// utilizando o '|| []' funciona, pois vai retornar a primeira parte
// ou a segunda, caso a primeira não funcionar

function renderTodos(){
  listElement.innerHTML = ''; // propriedade que contem todo o HTML dentro do elemento
  for(todo of todos){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    // Adicionando link para exclusão:
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);

    var linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1); // remove, a partir da posicao do primeiro parâmetro, 
                        // os itens na quantidade passada no segundo parametro
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  //localStorage.setItem('list_todos', todos);
  // Do jeito acima não é possível pois para armazenar chave-valor, o valor tem que ser string, e não array.
  localStorage.setItem('list_todos', JSON.stringify(todos)); // transforma o vetor em JSON
}