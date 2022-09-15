let currentNumber = null
let operator = null
let nextNumber = null

function add (currentNumber, nextNumber) {
    return currentNumber + nextNumber
}

function subtract (currentNumber, nextNumber) {
    return currentNumber - nextNumber
}

function multiply (currentNumber, nextNumber) {
    return currentNumber * nextNumber
}

function divide (currentNumber, nextNumber) {
    if (nextNumber == 0) {
        alert('Cannot divide by 0')
    } else {
        return currentNumber / nextNumber
    }
}

function operate(currentNumber, nextNumber, operator) {
    
    currentNumber = operations[operator](currentNumber, nextNumber)
    console.log(currentNumber)            

}

operations = {'+':add,
                '-':subtract,
                '*':multiply,
                '/':divide,
                '=':'equals'}

for (let i = 0; i < 10; i++) {
    let button = document.createElement('button')
    button.textContent = i
    
    let container = document.getElementById('button-container')
    container.appendChild(button)
    
}
Object.keys(operations).forEach(key => {
    let button = document.createElement('button')
    button.textContent = key
    let container = document.getElementById('operator-container')
    container.appendChild(button)
    })