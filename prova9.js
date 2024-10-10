/*
Implemente uma classe chamada Animal com um método fazerSom(). Em seguida, crie uma classe Cachorro que herde da classe Animal e 
sobrescreva o método fazerSom() para retornar o som "Au Au". Demonstre o uso das classes criando uma instância de Cachorro e 
chamando o método fazerSom().  
*/

class Animal{
    som(){
       return 'Animal'; 
    }
}
class Cachorro extends Animal{
    som(){
        return 'Au Au';
    }
}


let cachorro = new Cachorro;

console.log(`O Cachorro late: ${cachorro.som()}`);


