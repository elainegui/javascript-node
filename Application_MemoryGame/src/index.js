// this file wil be responsible for calling the others and group them
function onLoad(){
    //console.log('Screen Loaded!!', ScreenI, MemoryGame)

/*     const animal = {
        img: './icons/bone.png',
        name: 'dogBone'
    } */

/*     const htmlCode = ScreenI.obtainHtmlCode(animal)
    console.log(htmlCode)

    ScreenI.changeHtmlContent(htmlCode) */

  //  ScreenI.updateImages([
      /*   animal,
        animal,
        animal, 
        animal */
   // ])

   const dependencies = {
       screenI: ScreenI  //Screen I is global
   }

   //initialize Memory Game
   const memoryGame = new MemoryGame(dependencies)
   memoryGame.initializeApp()
}

window.onload = onLoad


