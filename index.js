// 1.

/* 
let filme = {
    diretor: ["Quentin Tarantino"],
    nome: ["Django livre"],
    data: ["18 de janeiro de 2013"],
    elenco: ["Quentin Tarantino", "Christoph Waltz", "Jamie Foxx", "Samuel L. Jackson", "Leonardo DiCaprio", "Calvin Candie", "Kerry Washington"],
    assitiu: true
};
console.log(filme.diretor);
console.log(filme.nome);
console.log(filme["data"]);
console.log(filme["elenco"]);
console.log(filme["assitiu"]);
 */

// 2.
/* 
let pessoa = {
    nome: "Gabriel Batista Nunes",
    idade: 19,
    generomusical: "Rock instrumental"
};
console.log(`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generomusical}.`);
 */

// 3.
/* 
let filme = {
    diretor: ["Quentin Tarantino"],
    nome: ["Django livre"],
    data: ["18 de janeiro de 2013"],
    elenco: ["Christoph Waltz", "Jamie Foxx", "Samuel L.Jackson", "Leonardo DiCaprio", "Kerry Washington"],
    assitiu: true
};

filme.personagens = ["Dr.King Schultz", "Django", "Stephen", "Calvin Candie", "Broomhilda"];
console.log(filme.elenco[0],"como", filme.personagens[0]);
console.log(filme.elenco[1],"como", filme.personagens[1]);
console.log(filme.elenco[2],"como", filme.personagens[2]);
console.log(filme.elenco[3],"como", filme.personagens[3]);
console.log(filme.elenco[4],"como", filme.personagens[4]);
console.log(filme.elenco[0] = "Xuxa");
console.log(filme.elenco);
 */

// 4.
/*  
let usuario = {
    nome: "prof",
    idade: 25,
    email: "prof@senacrs.com.br",
    cidade: "São Paulo"
};
let novousuario = {
    ...usuario,
    nome: "Jerson",
    idade: 29
};
console.log(usuario);
console.log(novousuario);
  */

// 5.
/* 
let listadenomes = ["Mika", "Paula", "vitor"];
let copialistadenomes = [...listadenomes];
console.log(copialistadenomes);
 */
// 6.

let pessoa = {
    nome: "Gabriel Batista Nunes",
    idade: 19,
    generomusical: "Rock instrumental"
};
function lerpessoa(novopessoa){
let novopessoa = {...pessoa} 
novopessoa.comida = ["pavê", "sagu", "torta de bolacha"] 
novopessoa.amigo = {nome: "Gerson", idade: 18};
return console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${novopessoa.comida[0]}, ${novopessoa.comida[1]} e ${novopessoa.comida[2]}. Seu melhor amigo se chama ${pessoa.amigo.nome} e tem ${pessoa.amigo.idade}.`)};
console.log(lerpessoa());
