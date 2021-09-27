class MemoryGame{
    //in this constructor if you send an object sx. {screen1:1, age: 2, ...}
    //it takes only the key, ex. screenI
    constructor({screenI, util}){
        this.screenI = screenI
        this.util = util

        this.defaultIcon = './icons/default.png'

        // emet: click in dogBone, ctrlD , you can change only the
        this.initialAnimals = [
            {img:'./icons/bone.png', name: 'dogBone'},
            {img:'./icons/boxer.png', name: 'dogboxer'},
            {img:'./icons/cat_ball.png', name: 'catBall'},
            {img:'./icons/cat_w_tie.png', name: 'catTie'}
        ]

        
        this.hiddenAnimals = []
        this.selectedAnimals = []
    }

    initializeApp(){
        this.screenI.updateImages(this.initialAnimals)
        //it will ignore 'this' from window
        //forces the screen to use 'this' from MemoryGame
        this.screenI.configPlayButton(this.play.bind(this))
        this.screenI.configBtnVerifySelection(this.verifySelection.bind(this))
        this.screenI.configBtnShowAll(this.showHiddenAnimals.bind(this))
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
        this.hiddenAnimals = concealedAnimals
    }

    showAnimals(animalName) {
        //we search for the animal by the name in initialAnimals
        // and obtain only its img
        //we use the constructor to obtain the img property
        const { img } = this.initialAnimals.find(({ name }) => animalName === name) 
        this.screenI.showAnimals(animalName, img)
    }

    verifySelection(id, name){
        const item = {id, name}
        console.log("Hello",item.id, item.name )
        // the user selects two images and the app verify if they are equal
        //if not the variables are cleaned
        const selectedAnimals = this.selectedAnimals.length
        switch(selectedAnimals){
            case 0: 
            //add it to a list, wairing for the next click
                this.selectedAnimals.push(item)
                break;
            case 1:
                // if the quantity is 1, the user can choose only one more
                // we will pick the first item on the list
                const [option1] = this.selectedAnimals //in JS, we can use this signature

                //reset items to not select more than 1
                this.selectedAnimals= []
                let mustShowMsg = false
                //verify if the cards are equal
                if(option1.name == item.name &&
                    
                option1.id !== item.id){
                    mustShowMsg =true
                    //alert('correct combination!')
                    //stop execution
                    this.showAnimals(item.name)
                    this.screenI.showMsg(true)
                    return;
                }
                this.screenI.showMsg(false)
                //alert('wrong combination')
                break;
        }

    }

    showHiddenAnimals() {
        const hiddenAnimals = this.hiddenAnimals
        for (const animal of hiddenAnimals) {
            const { img } = this.initialAnimals.find(item => item.name === animal.name)
            animal.img = img
        }
        this.screenI.updateImages(hiddenAnimals)
    }

    async shuffle(){
        const copies = this.initialAnimals
        //duplicate the items
        .concat(this.initialAnimals)
        //get each item and create an random id
        .map(item => {
            return Object.assign({}, item, {id: (Math.random()/ 0.5)})
        })
        .sort(() => Math.random() -0.5)
        this.screenI.updateImages(copies)
        this.screenI.showLoading()

        //wait 1 sec to update images with default
        //this.screenI.updateImages(copies)
        /* setTimeout(() => {
            this.hideAnimals(copies)
        }, 1000) */

        const idGap = this.screenI.initializeCounter()

        await this.util.timeout(3000)
        this.screenI.cleanCounter(idGap)

        this.hideAnimals(copies)
        this.screenI.showLoading(false)

    }

    play(){
        this.shuffle()
    }

}