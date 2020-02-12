// Exercício 01:
function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){ 
      if(idade >= 18)
        resolve();
      else
        reject();
    }, 000); // estava 2000. Destivado para não travar para próximos exercícios
  });
}

checaIdade(20)
  .then(function() {
    console.log('Maior ou igual a 18');
  })
  .catch(function() {
    console.log('Menor que 18');
  });

  // Exercícios 02 e 03:
  var inputElement = document.querySelector("#app input");
  var container = document.querySelector("#app");
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'result');

  function buscarUser() {
    var textInput = inputElement.value;
    var url = 'https://api.github.com/users/' + textInput + '/repos';
    newDiv.innerHTML = '';
    var titleElement = document.createTextNode('Carregando...');
    newDiv.appendChild(titleElement);
    axios.get(url)
      .then(function(response) {
        newDiv.innerHTML = '';
        titleElement = document.createTextNode('Repositórios encontrados:');
        newDiv.appendChild(titleElement);
        var listElement = document.createElement('ul');
        
        for(repositorio of response.data) {
          var itemElement = document.createElement('li');
          var textElement = document.createTextNode(repositorio.name);
          itemElement.appendChild(textElement);
          listElement.appendChild(itemElement);
        }
        
        newDiv.appendChild(listElement);
      })
      .catch(function(error) {
        newDiv.innerHTML = '';
        alert('Ocorreu um erro! Código do erro: ' + error.response.status + '. Mensagem do erro: ' + error.response.data.message);
      });
    
      container.appendChild(newDiv);
  }