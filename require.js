// require is a class that exists in node.js to fetch what the client has

const readLine = require('readline')

//inicializar o terminal 
const terminal = readLine.createInterface({
    //define the input mode via terminal
    //I define that everything will be input by te terminal
    input: process.stdin,
    //all output will be through the terminal
    output : process.stdout
})

//text of menu
const menuText = 'Hi, Welcome to Media System\nPress 1 to access the Initial Menu\nPress 2 for the Heroes Menu\nPress 3 to access the Warriors\nPress 0 to Exit\n'

//console.log('menuText', menuText)

/* terminal.question('What is your name? ',(msg)=> {
    console.log('You wrote ',msg)
    terminal.close()
}) */

//we are constructing an object
const questions = {
    initialMenu :{
        text: menuText,
        fn: initialMenu
        //I will call an fn whenever this object is called
    },
    option1: {
        text: 'submenu: Press to select more options...',
        fn: option1
    }
}
function option1(msg){
    console.log('There isn\'t more options!')
    terminal.close()
}

function initialMenu(msg){
    const option = Number(msg)
    if(isNaN(option)){
        throw new Error('Is not a number: ', msg)
    }
    //console.log('Initializing Menu!', msg)

    switch(option){
        case 0:
            console.log('Exiting...');
            terminal.close();
            break;
        case 1:
            console.log('Initial menu')
            terminal.question(
                questions.option1.text,
                questions.option1.fn
            )
            break;
        default: 
        console.log('Invalid Option')
        terminal.close()
        break;
    }
}

terminal.question(
    questions.initialMenu.text,
    questions.initialMenu.fn
)



//for loop

/* for(const index in minhaLista){
    const item = mnhaLista[index]
    console.log('Name', item.name)
} */

//the same but not need to use index

/* for(const item of minhaLista){
    console.log('Name', item.name)
} */