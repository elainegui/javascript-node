class MemoryGame{
    //inr this constructor if you send an object sx. {screen1:1, age: 2, ...}
    //it takes only the key, ex. screenI
    constructor({screenI}){
        this.screenI = screenI

        // emet: click in dogBone, ctrlD , you can change only the
        this.initialAnimals = [
            {img:'./icons/bone.png', name: 'dogBone'},
            {img:'./icons/boxer.png', name: 'dogboxer'},
            {img:'./icons/cat_ball.png', name: 'catBall'},
            {img:'./icons/cat_w_tie.png', name: 'catTie'}
        ]

        this.defaultIcon = './icons/default.png'
        this.hiddenAnimals = []
    }

    initializeApp(){
        this.screenI.updateImages(this.initialAnimals)
        //forces the screen to use 'this' from MemoryGame
        this.screenI.configPlayButton(this.play.bind(this))
        this.screenI.configBtnVerifySelection(this.verifySelection.bind(this))
    }

    verifySelection(id, name){
        const item = {id, name}
        //console.log("Hello",item.id, item.name )
    }

    play(){
        //console.log('you clicked')
        this.shuffle()

    }

    shuffle(){
        const copies = this.initialAnimals
        //duplicate the items
        .concat(this.initialAnimals)
        //get each item and create an random id
        .map(item => {
            return Object.assign({}, item, {id: Math.random()/ 0.5})
        })
        .sort(() => Math.random() -0.5)
        this.screenI.updateImages(copies)

        //wait 1 sec to update images with default
        this.screenI.updateImages(copies)
        setTimeout(() => {
            this.hideAnimals(copies)
        }, 1000)

    }

    hideAnimals(animals){
        //will change the animal images for the default image
        //we will extract only the necessary from animals

        //using the syntax ({key: 1}) we will return what will have inside the brackets
        // when we do nor use : (ex. id), o JS understands that the name is the same as 
        //the value. Ex. id: id , results id
        const concealedAnimals = animals.map(({name, id}) =>({
            id,
            name,
            img: this.defaultIcon
        }))

        //pdate the screen with the hidden animals
        this.screenI.updateImages(concealedAnimals)
    }

}