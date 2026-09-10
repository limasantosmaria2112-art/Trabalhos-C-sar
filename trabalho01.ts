//atividade 1 

class Pessoa {
    nome: string;
    idade: number;
 

    constructor (nome: string, idade: number) {

        this.nome = nome;
        this.idade = idade;
 }

 }
const pessoa = new Pessoa ("Marcolas", 16)

console.log(pessoa.nome, "\n", pessoa.idade);

//atividade 2

class Produto{

    nome: string;
    preco: number;
    estoque: number;

    constructor (nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}
const Pepino = new Produto("Pepino", 67, 9)
const oleodebebe = new Produto("oleo de bebe", 69, 7)

console.log(Pepino.nome, "\n", Pepino.preco, "\n", Pepino.estoque, "\n", oleodebebe.nome, "\n", oleodebebe.preco, "\n", oleodebebe.estoque)

//atividade 3

class Pessoa {
    nome: string;
    nota: number;

    constructor (nome: string, nota: number) {
        this.nome = nome, this.nota = nota
    }

    Avaliacao(){
    
        if (this.nota >= 6){
            return"Aprovado"
        } else {
            return "Reprovado"
        }

    }
 }



const pessoa = new Pessoa ("Marcolas", 8);
console.log(pessoa.nome, "\n", pessoa.nota, "\n", pessoa.Avaliacao())

//atividade 4

class Retangulo {
    altura: number;
    largura: number;

    constructor(altura: number, largura: number){
        this.altura=altura;
        this.largura=largura;
    }

    CalcularPerimetro() {
        return(2*(this.altura+this.largura))
    }

}

const retangulo = new Retangulo (5,5)
console.log(retangulo.altura, "\n", retangulo.largura, "\n", retangulo.CalcularPerimetro())

//atividade 5

