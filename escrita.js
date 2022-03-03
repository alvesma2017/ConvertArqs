const fs = require ("fs")

fs.writeFile("./teste2.txt","Escrvendo no arquivo", (erro)=>{
    if(erro){
        console.log("erro durante o salvamente")
    }
    
})