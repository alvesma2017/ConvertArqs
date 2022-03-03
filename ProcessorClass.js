class ProcessoClass{

    static Process(dados){
        var a = dados.split("\r\n")
        var rows = []

        a.forEach(row =>{
            var arr = row.split(";")
            rows.push(arr)
        })
        return rows
    }


}

module.exports = ProcessoClass