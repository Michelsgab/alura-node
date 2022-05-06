import App from "./src/app.js";

const port = process.env.PORT || 3000; //informando qual a porta do nosso servidor local


App.listen(port, () => { //qual o servidor será executado
    console.log(`Servidor requisitando em http://localhost:${port}`); //imprime na tela o conteúdo em cada tela
})







// const http = require("http") //importando o http da lib


// const rotas = { //informando as rotas / paths / endpoints
//     '/': 'Curso de Node.js',
//     '/livros': 'Livros sobre Node.js',
//     '/autores': 'Listagem dos autores',
//     '/carros': 'Carros',
// }

// const server = http.createServer((req, res) => { //criando o servidor (requisição, resposta)
//     res.writeHead(200, {'Content-Type': 'text/plain'}); //devolve status, texto
//     res.end(rotas[req.url]); //respondendo o status com o conteudo do endereço
// })