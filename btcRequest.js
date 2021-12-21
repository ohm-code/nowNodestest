
var myHeaders = new Headers();
myHeaders.append("api-key", "y9ZfjnC14dpRPr50cYNa6TvoXWK8Bxu7E");
myHeaders.append("Content-Type", "application/json",);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://btc.nownodes.io/api/v2/tx/e9af0964a511954dd1a8c66e358707eba670bf0489ead22e771d7c8a1b108784", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 