
const readline = require('readline')
const terminal = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)
    /* terminal.question('What is your name?', name =>{
        terminal.question('What is yor phone?', phone => {
            console.log(`
                    Name: ${name},
                    Phone: ${phone}
                `)
        })
   
    }) */

    function questionAsync(text){
        return new Promise((resolve, reject) => {
            //when there is not any error in the cllback, we just pass resolve
            terminal.question(`${text}\n`, resolve)
        })
    }


    let name = ""
    let phone = ""
    Promise.resolve()
        .then(() => questionAsync('What is your name?'))
        .then(responseName => {
            if(!responseName){
                throw new Error('Blank Field!')
            }
            
            name = responseName
        })
        .then(()=> questionAsync('What is your phone?'))
        .then(responsePhone => {
            if(!responsePhone){
                throw new Error('Blank Field!')
            }
            phone = responsePhone
        })
        .then(() =>{
            console.log(`Name: ${name}, Phone: ${phone}`)
        })
        .catch(error => {
            console.error('Some error happened!')
        })
        .finally(() => terminal.close())

