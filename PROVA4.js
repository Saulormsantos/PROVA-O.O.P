/*Faça um programa para controle de empréstimo de livros, com as classes Emprestimo, Livro e Pessoa. */

class Emprestimo {
    constructor(tipo,periodo,data){
        this.tipo = tipo;
        this.periodo = periodo;
        this.data = data;
    };
        infor(){
        return `Tipo de Emprestimo: ${this.tipo} / Periodo: ${this.periodo} / Início: ${this.data}`;
        
    };
};

let emprestimo = new Emprestimo("Estudantil",`45 dias`, "09/10/2024");

    console.log(emprestimo.infor());
   

class Livro extends Emprestimo{
    constructor(nome,autor){
        super(Emprestimo)
        this.nome = nome;
        this.autor = autor;
    };
    informacao(){
    return `Livro: ${this.nome}  /  Autor: ${this.autor}`;
};
};

const livro = new Livro("O Guarani","José de Alencar");
console.log(livro.informacao());

class Pessoa extends Emprestimo{
    constructor(nomep,endereco){
        super(Emprestimo)
        this.nomep = nomep;
        this.endereco = endereco;
    };
    informacao(){
    return `Aluno: ${this.nomep}  /  Matricula: ${this.endereco}`;
};
};

const pessoa = new Pessoa("Saulo",4054222);
console.log(pessoa.informacao());