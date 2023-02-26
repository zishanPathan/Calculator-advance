const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const display = document.querySelector('.calculator__display')
       const key = e.target
       const action = key.dataset.action 
       const keyContent = key.textContent
       const displayedNum = display.textContent
       const previousKeyType = calculator.dataset.previousKeyType
    if(!action){
        if(displayedNum === '0'|| previousKeyType === 'operator'){
            display.textContent = keyContent
        }else{
            display.textContent = displayedNum + keyContent
        }
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

    }
     if(
        action === 'add' ||
        action === 'subtract'||
        action === 'multiply'||
        action === 'divide'
        ){
            key.classList.add('is-depressed')
            //custom attribute 
            calculator.dataset.previousKeyType = 'operator'

            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        
     if(action === 'decimal'){
        display.textContent = displayedNum + "."
     }
     if(action === 'clear'){
        console.log('clear key')
     }
     if(action === 'calculate'){
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

        display.textContent = calculate(firstValue,operator,secondValue)
     }
}

})

let calculate =(number1,operator,number2)=>{
    let result = ''
     
    if(operator === 'add'){
       result = parseFloat(number1) + parseFloat(number2)
    }
    if(operator === 'subtract'){
        result = parseFloat(number1) - parseFloat(number2)
    }
    if(operator === 'multiply'){
        result = 
        parseFloat(number1) * parseFloat(number2)
    }
    if(operator === 'divide'){
       result =  parseFloat(number1) / parseFloat(number2)
    }
    return result
}
