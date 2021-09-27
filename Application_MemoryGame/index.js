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

   const dependenciesScreen = {
       screenI: ScreenI, //Screen I is global
       util: Util
   }

   //initialize Memory Game
   const memoryGame = new MemoryGame(dependenciesScreen)
   memoryGame.initializeApp()
}

window.onload = onLoad


