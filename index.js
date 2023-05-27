class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    aparecer(){
        try{
            return this.atributos();
        }catch(erro){
            console.log(erro.stack);
        }
         }

    atributos(){
        if(this.nome !=""&&this.sobrenome !=""){
            return this.nome + this.sobrenome;
        } else 
        {
       throw new Error("Esta faltando nome e sobrenome :)")
    }
  }
}



const pessoa =  new Pessoa("","Maronez");
console.log(pessoa.aparecer());