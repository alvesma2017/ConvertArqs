const fs = require("fs")


function modificaruser(nome, endereco, numero){
fs.readFile("./usuario.json",{encoding: "UTF-8"},(erro, dados)=>{
if(erro){
    console.log("erro aconteceu")
}else{
    var conteudo = JSON.parse(dados)
    
    conteudo.nome = nome
    conteudo.endereco = endereco
    conteudo.numero = numero

    fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
        if(erro){
            console.log("deu erro na gravação")
        }

    })
}

})
}
modificaruser("teste","olá",45)