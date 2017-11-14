const http = require('http');

// Cria servidor
const srv = http.createServer((req, res) => {
  console.log(req);
  res.end('Chegou aqui');


});

// Abre a Porta
srv.listen(8080);
