//to know this is a global variable
const util = Util

const ID_CONTENT = "contentCard"
const ID_BTN_PLAY = "play"
const ID_MSG = "message"
const INVISIBLE_CLASS = "invisible"
const ID_LOADING = "loading"
const ID_COUNTER = "counter"
const ID_SHOWALL ="showAll"
const MESSAGES = {
    success:{
        text: "Correct Conbination!",
        class: "alert-success" 
    },
    error:{
        text: "Wrong combination!",
        class: "alert-danger"
    }
}

class ScreenI{
    static obtainHtmlCode(item){
      // console.log('obtainHtmlCode')
      //console.log(item.img)
        return `
        <div class="col-md3">
            <div class="card" style="width: 50%;" onclick="window.verifySelection('${item.id}', '${item.name}')">
                <img src="${item.img}" name="${item.name}" class="card-img-top" alt="..." >
            </div>
        <br />
        </div>`
    }

  /*   static configBtnVerifySelection (fnOnClick){
        // we will create a window function
        window.verifySelection= fnOnClick
    } */

    static changeHtmlContent(htmlCode){
       // console.log('changehtmldoc')
        const content = document.getElementById(ID_CONTENT)
        //console.log(content)
        content.innerHTML = htmlCode
    }

    static generateStringHtmlByImage(data){
        //for eacjh item in the list run obtainHtmlCode()
        //in the end concatenate everything in just one string
        return data.map(ScreenI.obtainHtmlCode).join('')
    }

    static async showMsg(success = true){
        const element = document.getElementById(ID_MSG)
        if(success) {
            //reomover qq erro
            element.classList.remove(MESSAGES.error.class)
            element.classList.add(MESSAGES.success.class)
            element.innerText = MESSAGES.success.text
        }
        else {
            element.classList.remove(MESSAGES.success.class)
            element.classList.add(MESSAGES.error.class)
            element.innerText = MESSAGES.error.text
        }

        element.classList.remove(INVISIBLE_CLASS)
        await util.timeout(1000)
        element.classList.add(INVISIBLE_CLASS)
    }

    static initializeCounter(){
        let countUntil = 3
        const identifierNoText = "$$counting"
        const defaultText = `Beggining in ${identifierNoText} seconds...`
        const elementCounter = document.getElementById(ID_COUNTER)

        //every time it run will take 1 from counter
        const updateText = _ => 
        (elementCounter.innerHTML= defaultText.replace(
            identifierNoText, countUntil--
        ))

        updateText()

        //will run every second
        const idGap = setInterval(updateText, 1000)
        return idGap
    }

    static cleanCounter(idCounter){
        clearInterval(idCounter)
        document.getElementById(ID_COUNTER).innerHTML= ""
    }

    static showLoading(show=true){
        const loading = document.getElementById(ID_LOADING)
        if(show){
            loading.classList.remove(INVISIBLE_CLASS)
            return
        }
        loading.classList.add(INVISIBLE_CLASS)
    }

    static updateImages(items){
        const htmlCode = ScreenI.generateStringHtmlByImage(items)
        ScreenI.changeHtmlContent(htmlCode)
    }

    static showAnimals(name, img) {
        const elements = document.getElementsByName(name)
        //we set the value of the src to img
        elements.forEach(item => (item.src = img))
    }

    static configPlayButton(fnOnClick){
        const btnPlay = document.getElementById(ID_BTN_PLAY)
        btnPlay.onclick = fnOnClick
    }

    static configBtnVerifySelection(fnOnclick) {
        window.verifySelection = fnOnclick
    }

    static configBtnShowAll(fnOnclick){
        const btnShowAll = document.getElementById(ID_SHOWALL)
                btnShowAll.onclick = fnOnclick
    }

}