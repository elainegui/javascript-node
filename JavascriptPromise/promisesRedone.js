const readline = require('readline')
const terminal = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }

)

function questionAsync(text){
    return new Promise((resolve, reject) => {
        //creating code to manipulate the errors
       terminal.question(`${text}\n`, msg => {
           //when we use promise we do not pass throw, we pass reject  //note there are two '!!'
           !!msg ? resolve(msg) : reject(new Error('The field cannot be empty'))
       })
    })
}

// to work with async/await we have to be working with promise and
// also we have to inform the js compiler that we will work with promise

//the signature has 'async'

async function main(){
    try{
        console.log('try')
        const name = await questionAsync('What is your name?')
        const phone = await questionAsync('What is your phone?')
        console.log(`Name: ${name}, Phone: ${phone}`)
    }catch(error){
        console.log ('An error occured', error.stack)
    }finally{
        terminal.close()
    }
}

main()
