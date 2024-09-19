let copiedGameField;
let gameField;

function addRestartEvent() {
    const replayButton = document.querySelector('.gameResult__button');
    replayButton.addEventListener('click', startNewGame);
}

function startNewGame() {
    gameField.replaceWith(copiedGameField);
    setUpAnimation();
}