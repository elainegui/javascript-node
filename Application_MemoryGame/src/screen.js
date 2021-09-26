const ID_CONTENT = "contentCard"

class ScreenI{
    static obtainHtmlCode(item){
      // console.log('obtainHtmlCode')
      //console.log(item.img)
        return `<div class="col-md3"><div class="card" style="width: 50%;"><img src="${item.img}" name="${item.name}" class="card-img-top" alt="..."></div><br /></div>`
    }

    static changeHtmlContent(htmlCode){
        console.log('changehtmldoc')
        const content = document.getElementById(ID_CONTENT)
        console.log(content)
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
}