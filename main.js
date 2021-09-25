const Maths = require('./maths')
console.log(Maths.sum(1,4))

const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insert the first value\n', value1 => {
    terminal.question('Insert the second value\n',value2 =>{
    //console.log('value1', value1, 'value2', value2)
        terminal.question('Insert type of the operation\n',operationType =>{
                //we will invoke the operation based on the name of the function
                const result = Maths[operationType](
                    Number(value1), Number(value2)
                )
                console.log(`The operation ${operationType} of ${value1} e ${value2} is ${result}`)
                terminal.close()
        })
    })
})

