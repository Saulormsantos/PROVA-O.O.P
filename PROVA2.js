/*Faça um programa de agenda telefônica, com as classes Agenda e Contato*/
class Agenda {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

        infor(){
        return `Nome: ${this.nome} Sobrenome: ${this.sobrenome}`;
    };
};

let pessoa = new Agenda("Theo","Marinho");
    console.log(pessoa.infor());

class Contato extends Agenda{
    constructor(numero,endereco){
        super(Agenda)
        this.numero = numero;
        this.endereco = endereco;
    };
    informacao(){
    return `Contato: ${this.numero} e Número: ${this.endereco}`;
};
};
const contato1 = new Contato("Saulo","(24) 998479577");

console.log(contato1.informacao());





