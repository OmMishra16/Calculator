let num1 = Number(prompt("Enter the first number:"))
let num2 = Number(prompt("Enter the second number:"))
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Ans: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Ans: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Ans: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Ans: " + result
}