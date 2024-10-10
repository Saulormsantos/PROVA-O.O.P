/*Implemente um sistema simples em JavaScript para simular um cadastro de pessoas com endereços. O exercício explora o conceito de 
agregação entre as classes Endereco e Pessoa. Siga as instruções abaixo para implementar o sistema.

Requisitos:

Classe Endereco:

Crie uma classe Endereco que contenha os seguintes atributos:rua: Nome da rua (string).numero: Número do endereço (string ou número).

Classe Pessoa:

Crie uma classe Pessoa que contenha os seguintes atributos:nome: Nome da pessoa (string).endereco: Objeto do tipo Endereco que representa o 
endereço da pessoa.A classe Pessoa deve agregar um objeto Endereco e exibir suas informações utilizando um método chamado exibirInformacoes().

Método exibirInformacoes():

O método exibirInformacoes() deve exibir a seguinte mensagem no console:"Nome: nome, Endereço: rua, número".Exemplo: "Nome: João Silva, 
Endereço: Rua das Flores, 123".

Demonstração:

Crie uma instância de Endereco e uma instância de Pessoa.Agregue o endereço à pessoa e chame o método exibirInformacoes() para mostrar os dados.*/


class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao
    }
    // método de classe = ação
    apresentar(){
            console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
    
}

class Endereco {
    constructor(rua, numero){
        this.rua = rua;
        this.numero = numero;
       
       
    }
    apresentar(){
        console.log(`Rua: ${this.rua}, número: ${this.numero}`);
    }
}
// criação de objeto a partir da classe
const endereco1 = new Endereco("Avenida Perimenntal Norte", 988); // pessoal objeto
const pessoa = new Pessoa("Avenida Perimenntal Norte", 988); // pessoal objeto


// chamar método de classe objetos

endereco1.apresentar();
pessoa.apresentar();
;

