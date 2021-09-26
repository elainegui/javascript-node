window.onload = () => {
    console.log('The screen has loaded!')
    const btn= document.getElementById('btnCalculate')
    btn.onclick = click 

    function obtainInputValue(id){
        const item = document.getElementById(id)
        return item.value
    }


    function click(){
        const opType = obtainInputValue('operationType');
        const value1 = obtainInputValue('value1')
        const value2 = obtainInputValue('value2')
        const result = Maths[opType](value1, value2)

        console.log('result', result)
        document.getElementById('result')
        .innerText = `The operation of ${opType} ${value1} by ${value2} is ${result}` 
    }
}