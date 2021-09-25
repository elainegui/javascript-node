//module filesystem is from node js to work with files 
//and things of the operational system
const fs = require('fs');
//(error, response) is the callback

/*fs.readFile('./text1.txt', (error, response) =>{
     if(error){
        console.error('Error found ', error.stack)
        return;
    } */

    //console.log('response', response);
    //that returns a Buffer
    //Buffer is an binary file that you can slice it to process on demand
    //At this moment the Buffer is not a text . We have to call toString
    //console.log('response', response.toString());

    fs.readFile('./text1.txt', (errorDoc1, responseDoc1)=>{
        if(errorDoc1){
            console.error('Error found ', errorDoc1)
            return;
        }
        //call the second doc
        fs.readFile('./text2.txt', (errorDoc2, responseDoc2)=>{
            if(errorDoc2){
                console.error('Error found ', errorDoc2)
                return;
            }
            fs.readFile('./text3.txt', (errorDoc3, responseDoc3)=>{
                if(errorDoc3){
                    console.error('Error found ', errorDoc3)
                    return;
                }
                const content = `${responseDoc1}\n${responseDoc2}\n${responseDoc3}`
                //console.log(content) //it writes all the words on the console 
            
                //we will create a new doc with all the content
                //it goes to the operational system end try to create the file
                fs.writeFile('./final.txt', content,(errorWrite, responseWrite)=> {
                    if(errorWrite){
                        console.error('Problem with file', errorWrite)
                        return;
                    }
                    console.log('Success in creating document')
                })
             })
        })
    })

    //nowadays these callbacks are not very used
        