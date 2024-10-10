/*Faça uma programa para representar a árvore genealógica de uma família. Para tal, crie uma classe Pessoa que permita indicar, 
além de nome e idade, o pai e a mãe. Tenha em mente que pai e mãe também são do tipo Pessoa. */

class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    };

        infor(){
        return `Nome: ${this.nome} Idade: ${this.idade} anos`;
    };
};

let pessoa = new Pessoa("Miguel",11);
    console.log(pessoa.infor());

class Familia extends Pessoa{
    constructor(nomedopapai,nomedamamae){
        super(Pessoa)
        this.nomedopapai = nomedopapai;
        this.nomedamamae = nomedamamae;
    };
    informacao(){
    return `Nome do Pai é: ${this.nomedopapai} e o Nome da Mãe é: ${this.nomedamamae}`;
};
};
const familia = new Familia("Saulo","Sarah");

console.log(familia.informacao());