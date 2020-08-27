class visualDiagonalDifference {

    constructor({
        size,
        speed,
    }) {
        this.size = size
        this.speed = speed
        this.board = []
        this.build()
    }
    build () {
        for (let i = 0; i < this.size; i++ ) {
            this.board.push([])
        }
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let randomNumber = Math.floor(Math.random() * 10)
                this.board[i].push(`   ${randomNumber}   `)
            }
        }
    }
    run() {
        this.printBoard()
    }
    async printBoard() {
        console.clear()
        let firstString = 0
        let secondString = 0
        for (const i in this.board) {
            let rightI = (this.board.length - 1) - i

            // copy the orinial marker
            let copy = this.board[i][i]
            let copy2 = this.board[i][rightI]

            // parse number
            let cleanNum = parseInt(this.board[i][i])
            let cleanNum2 = parseInt(this.board[i][rightI])

            // reassign board
            this.board[i][i] = ` ( ${cleanNum} ) `
            this.board[i][rightI] = ` ( ${cleanNum2} ) `



            for (const row of this.board) {
                console.log(row.join(``))
                console.log(`\n`)
            }
            firstString += cleanNum
            secondString+= cleanNum2

            console.log(`\n`)
            console.log(`                       string1:${firstString}`)
            console.log(`\n`)
            console.log(`                       string2:${secondString}`)

            await new Promise(((resolve) => {
                setTimeout(() => {
                    console.clear()
                    resolve()
                }, this.speed)
            }))
            this.board[i][i] = copy
            this.board[i][rightI] = copy2
        }
        for (const row of this.board) {
            console.log(row.join(``))
            console.log(`\n`)
        }
        console.log(`\n`)
        console.log(`                       string1:${firstString}`)
        console.log(`                       string2:${secondString}`)
        console.log(`\n`)
        console.log(`                       total: ${Math.abs(firstString - secondString)}`)
        console.log(`\n`)
    }
}

module.exports = visualDiagonalDifference
