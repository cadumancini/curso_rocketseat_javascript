var minhaPromise = function() { // Promise é usado para poder trabalhar com métodos assíncronos em JS. Permite utilizar o "then" e o "catch"
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest(); // permite fazer requisições HTTP
    xhr.open('GET', 'https://api.github.com/users/cadumancini'); // método + URL
    xhr.send(null); // parametros da chamada

    xhr.onreadystatechange = function() { // quando muda o status da requisição
      if(xhr.readyState === 4) { // status 4 é quando teve retorno
        if(xhr.status === 200) { // se status === OK
          resolve(JSON.parse(xhr.responseText)); // deu certo
        } else {
          reject('Erro na requisição'); // deu algum erro
        }
      }
    }
  });
}

// var resultado = minhaPromise();
// console.log(resultado); // vai retornar uma Promise com status "pending", pois mandou escrever antes de terminar a Promise

// da forma acima não é utilizado.

minhaPromise()
  .then(function(response) {
    console.log(response);
  }) // response é chamado quando o "resolve" é chamado dentro da Promise
  .catch(function(error) {
    console.warn(error);
  }); // error é chamado quando o "reject" é chamado dentro da Promise