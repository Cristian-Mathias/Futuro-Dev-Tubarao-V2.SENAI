/* Introdução a POO

1-Crie uma classe Carro com as propriedades marca, modelo e ano.
2-Crie um método na classe Carro chamado info() que exibe as 
informações do carro no formato "Marca: XXX, Modelo: XXX, Ano: XXX".
3-Crie duas instâncias da classe Carro com diferentes informações e 
chame o método info() para cada uma delas. */

class carro{
    constructor(marca,modelo,ano){
       this.marca = marca,
       this.modelo = modelo,
       this.ano = ano
    }
    /* método info()acessa e exibi as informações, encapsulando os dados do carro dentro da própria classe.  */
    info(){
        return `Marca: ${this.marca}. Modelo: ${this.modelo}. Ano: ${this.ano}.`;
    }
};

/* instância da classe carro */
let carro1 = new carro('BMW','X5.5','2023');
let carro2 = new carro('Ferrari','Purosangue','2023');

console.log(carro1.info());
console.log(carro2.info());