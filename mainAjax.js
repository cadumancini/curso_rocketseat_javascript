axios.get('https://api.github.com/users/cadumancini') // cria a Promise utilizando XMLHTTPRequest
  .then(function(response) {
    console.log(response);
    // ele já entende que a resposta é um JSON. Poderia usar:
    console.log(response.data.avatar_url);
  }) // response é chamado quando o "resolve" é chamado dentro da Promise
  .catch(function(error) {
    console.warn(error);
  }); // error é chamado quando o "reject" é chamado dentro da Promise