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
    }

    initializeApp(){
        this.screenI.updateImages(this.initialAnimals)
    }
}