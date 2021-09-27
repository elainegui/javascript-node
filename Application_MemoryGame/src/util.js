class Util{
    static timeout(time){
        //only success, we wont manipulate error
        return new Promise(resolve => setTimeout(resolve,time))
    }
}