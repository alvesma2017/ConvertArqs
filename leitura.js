const fs = require ("fs")

var  conteudo

fs.readFile("./teste.txt", {encoding: "UTF-8"}, (erro,dados) =>{
        if(erro){
            console.log("erro na leitura do arquivo")
        }else {
            conteudo = dados
            console.log(dados)
        }

})