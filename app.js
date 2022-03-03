var Reader = require("./ReaderClass")
var Processor = require("./ProcessorClass")
var Tabela = require("./TabelaClass")
var leitor = new Reader()


async function main(){
    var dados =  await leitor.Read("./base.csv")
    var dadosProcessados = Processor.Process(dados)
    
    var usuarios = new Tabela(dadosProcessados)
}
main()
