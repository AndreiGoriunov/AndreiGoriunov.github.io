const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const restartButton = document.getElementById('restart-button')
const messageText = document.querySelector('[data-message-text]')
const messageElement = document.getElementById('message')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    messageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? O_CLASS : X_CLASS
        // Place Mark
    cell.classList.add(currentClass);
    // Check for Win
    if (checkWin(currentClass)) {
        endGame(false)
            // Check Draw
    } else if (isDraw()) {
        endGame(true)
    } else {
        circleTurn = !circleTurn;
        setBoardHoverClass()
    }



}

function endGame(draw) {
    if (draw) {
        messageText.innerText = 'Draw!'
    } else {
        messageText.innerText = `${circleTurn ? "O" : "X"} Wins!`
    }
    messageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    })
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (circleTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}