class personagem {
    constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    
    atacar() {
        if(this.tipo === "Mago") {
            let ataque = "magia"
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if(this.tipo === "Guerreiro") {
            let ataque = "espada"
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if(this.tipo === "Monge") {
            let ataque = "artes marciais"
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        } else if(this.tipo === "Ninja") {
            let ataque = "shuriken"
            console.log(`O herói ${this.tipo} usou ${ataque} `)
        }
    }
}

let heroi = new personagem("Sanmix", 25, "Ninja")
let heroi1 = new personagem("Hércules", 500, "Guerreiro")

heroi.atacar()
heroi1.atacar()