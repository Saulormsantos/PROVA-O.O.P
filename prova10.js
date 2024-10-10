/*Crie uma classe Produto com um construtor que aceite dois ou três parâmetros (nome, preco, categoria). 
Se categoria não for informado, defina como "Indefinido". */



class Produto{
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    informacao(){
        return `Produto: ${this.nome}, Preco:${this.preco}, Categoria:${this.categoria}`;
    }
}
let produto = new Produto("Arroz", 29.99);
console.log(produto.informacao())