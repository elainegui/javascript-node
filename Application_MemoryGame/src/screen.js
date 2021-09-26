const ID_CONTENT = "contentCard"
const ID_BTN_PLAY = "play"

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

    static configBtnVerifySelection (fnOnClick){
        // we will create a window function
        window.verifySelection= fnOnClick
    }

    static changeHtmlContent(htmlCode){
       // console.log('changehtmldoc')
        const content = document.getElementById(ID_CONTENT)
        //console.log(content)
        content.innerHTML = htmlCode
    }

    static generateStringHtmlByImage(items){
        //for eacjh item in the list run obtainHtmlCode()
        //in the end concatenate everything in just one string
        return items.map(ScreenI.obtainHtmlCode).join('')
    }

    static updateImages(items){
        const htmlCode = ScreenI.generateStringHtmlByImage(items)
        ScreenI.changeHtmlContent(htmlCode)
    }

    static configPlayButton(fnOnClick){
        const btnPlay = document.getElementById(ID_BTN_PLAY)
        btnPlay.onclick = fnOnClick
    }

}