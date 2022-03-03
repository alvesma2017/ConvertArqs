

class Tabela{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }
    get RowCount(){
        return this.row.length
    }
    get ColumnCount(){
        return this.header.length
    }
}

module.exports = TabelaClass