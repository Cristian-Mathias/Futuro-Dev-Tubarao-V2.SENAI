/* 
Classes ,Objetos e Herança

1-Crie uma classe Animal com as propriedades nome e idade.
2-Crie um método na classe Animal chamado som() que exibe o som que o animal faz.
3-Crie uma classe Cachorro que herda da classe Animal.
4-Sobrescreva o método som() na classe Cachorro para exibir "Au au!".
5-Crie uma instância da classe Cachorro e chame o método som(). 
*/

class Animal{
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    info(){
        return `Nome: ${this.nome}. Idade: ${this.idade}.`;
    }
    som(){
        return `Auuuuuuuuuu!`;
    } 
}

class Cachorro extends Animal{
    constructor(nome,idade){
        super(nome,idade);
    }
    som(){
        return `Au au!`;
    } 
}

let dog = new Animal('Fred','3 anos');
let cachorro = new Cachorro();

console.log(dog.info(),dog.som());
console.log(dog.info(),cachorro.som());


