const gameItems = ['rock', 'paper', 'scissors'];
const score = document.querySelector('.score__score');
let scoreCounter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startGame(chosenItemImg) {
    const houseItem = gameItems[getRandomInt(3)];
    const classesString = chosenItemImg.closest('.item').getAttribute('class');
    const chosenItem = chosenItemImg.closest('.item');
    const chosenItemName = classesString.split(' ')[1];
    const houseChosenItem = document.querySelector('.houseItem');
    

    if (chosenItemName == houseItem) {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('draw');
        }, 2000);
        
    }
    else if (chosenItemName == 'rock' && houseItem == 'paper') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You lose');
            scoreCounter = 0;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 3000);
    }
    else if (chosenItemName == 'rock' && houseItem == 'scissors') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You win');
            scoreCounter++;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(chosenItemImg);
        }, 3000);
    }
    else if (chosenItemName == 'paper' && houseItem == 'rock') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You win');
            scoreCounter++;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(chosenItemImg);
        }, 3000);
    }
    else if (chosenItemName == 'paper' && houseItem == 'scissors') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You lose');
            scoreCounter = 0;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 3000);
    }
    else if (chosenItemName == 'scissors' && houseItem == 'paper') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You win');
            scoreCounter++;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(chosenItemImg);
        }, 3000);
    }
    else if (chosenItemName == 'scissors' && houseItem == 'rock') {
        showHousePickedItem(houseItem);
        setTimeout(() => {
            getFreePlaceForGameResult(chosenItem, houseChosenItem);
            showGameResult('You lose');
            scoreCounter = 0;
            score.innerHTML = scoreCounter;
        }, 2000);
        
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 3000);
    }
}

function getFreePlaceForGameResult(chosenItem, houseItem) {
    if(window.innerWidth > 1024) {
        document.querySelector('.darkCircle').style.display = 'none';
        chosenItem.style.left = '10%';
        chosenItem.style.right = 'auto';
        
        houseItem.style.right = '10%';
    }
    else {
        return 1;
    }

}

function showGameResult(result) {
    const gameResult = document.querySelector('.gameResult');
    const resultText = gameResult.childNodes[0];
    resultText.innerHTML = result;
    gameResult.style.display = 'block';
    gameResult.classList.remove('gameResult_opacity_zero');
    gameResult.classList.add('gameResult_opacity_one');
}

function showHousePickedItem(item) {
    const houseItem = document.querySelector('.houseItem');
    const img = houseItem.childNodes[0].childNodes[1].childNodes[0];
    const itemBorder = houseItem.childNodes[0].childNodes[1];
    // houseItem_opacity_one
    // houseItem_opacity_zero
    if (item == 'paper') {
        img.setAttribute('src', 'img/icon-paper.svg');
        itemBorder.classList.remove('item__img_border_yellow');
        itemBorder.classList.add('item__img_border_blue');
    } else if (item == 'rock') {
        img.setAttribute('src', 'img/icon-rock.svg');
        itemBorder.classList.remove('item__img_border_yellow');
        itemBorder.classList.add('item__img_border_red');
    } else {
        img.setAttribute('src', 'img/icon-scissors.svg');   
    }
    
    setTimeout(() => {
        houseItem.classList.remove('houseItem_opacity_zero');
        houseItem.classList.add('houseItem_opacity_one');
    }, 1000);
}



function showCircles(item) {
    const circle1 = item.childNodes[1];
    const circle2 = item.childNodes[2];
    const circle3 = item.childNodes[3];

    const circle1Animation = circle1.animate(circle1keyFrames, options.circle1).persist();
    const circle2Animation = circle2.animate(circle2keyFrames, options.circle2).persist();
    const circle3Animation = circle3.animate(circle3keyFrames, options.circle3).persist();
}


const circle1keyFrames = [
    {transform: 'scale(1)'},
    {transform: 'scale(1.7)'},
    {transform: 'scale(1.6)'},
];

const circle2keyFrames = [
    {transform: 'scale(1)'},
    {transform: 'scale(2.1)'},
    {transform: 'scale(2.0)'},
];

const circle3keyFrames = [
    {transform: 'scale(1)'},
    {transform: 'scale(2.6)'},
    {transform: 'scale(2.5)'},
];

const options = {
    circle1: {
        duration: 350,
        fill: "forwards"
    },
    circle2: {
        duration: 400,
        fill: "forwards"
    },
    circle3: {
        duration: 450,
        fill: "forwards"
    }
    
}
