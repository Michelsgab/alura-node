import express from "express"; //importando o framework express
import db from "./config/dbConnect.js";
// import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express(); //instanciando o express

app.use(express.json()); //informar que iremos enviar em formato json

routes(app);

// const livros = [
//   //criando uma constante de livros | dados
//   { id: 1, titulo: "Código Limpo" },
//   { id: 2, titulo: "Guia Front-End" },
// ];

// app.get("/", (req, res) => {
//   //fazendo uma requisição get para rota /
//   res.status(200).send("Curso de Node.js"); //status 200 ? imprime o texto
// });

// app.get("/livros", (req, res) => {
//   livros.find((err, livros) => {
//     //fazendo uma requisição get p rota /livros
//     res.status(200).json(livros); //status 200 ? json da constante de livros
//   });
// });

// app.get("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params.id);
//   res.json(livros[index]);
// });

// app.post("/livros", (req, res) => {
//   //requisição de criar em livro
//   livros.push(req.body); //adicionando a requisição no array
//   res.status(201).send(`Livro cadastrado com sucesso!`); //status 200 ? imprime o texto
// });

// app.put("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.json(livros);
// });

// app.delete("/livros/:id", (req, res) => {
//   let index = buscaLivro(req.params.id);
//   livros.splice(index, 1)
//   res.json(livros)
// });

// app.delete("/livros/:id", (req, res) => {
//   let { id } = req.params;
//   let index = buscaLivro(id);
//   livros.splice(index, 1);
//   res.json(`Livro ${id} removido com sucesso!`);
// });

// function buscaLivro(id) {
//   return livros.findIndex((livro) => livro.id == id);
// }

export default app;
