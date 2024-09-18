const gameItems = ['rock', 'paper', 'scissors'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function startGame(chosenItem) {
    const houseItem = gameItems[getRandomInt(3)];
    const classesString = chosenItem.closest('.item').getAttribute('class');
    const chosenItemName = classesString.split(' ')[1];
    const houseChosenItem = document.querySelector('.houseItem');
    
    console.log('You picked', chosenItemName);
    console.log('House picked', houseItem);

    console.log(chosenItem)

    if (chosenItemName == houseItem) {
        console.log('draw');
        showHousePickedItem(houseItem);
    }
    else if (chosenItemName == 'rock' && houseItem == 'paper') {
        console.log('you lose');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 1500);
    }
    else if (chosenItemName == 'rock' && houseItem == 'scissors') {
        console.log('you win');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(chosenItem);
        }, 1500);
    }
    else if (chosenItemName == 'paper' && houseItem == 'rock') {
        console.log('you win');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(chosenItem);
        }, 1500);
    }
    else if (chosenItemName == 'paper' && houseItem == 'scissors') {
        console.log('you lose');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 1500);
    }
    else if (chosenItemName == 'scissors' && houseItem == 'paper') {
        console.log('you win');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(chosenItem);
        }, 1500);
    }
    else if (chosenItemName == 'scissors' && houseItem == 'rock') {
        console.log('you lose');
        showHousePickedItem(houseItem);
        setTimeout(() => {
            showCircles(houseChosenItem.childNodes[0].childNodes[1]);
        }, 1500);
    }
}

function showCircles(item) {
    console.log(item);
    console.log(item.childNodes[1]);
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


function showHousePickedItem(item) {
    const houseItem = document.querySelector('.houseItem');
    const img = houseItem.childNodes[0].childNodes[1].childNodes[0];
    const itemBorder = houseItem.childNodes[0].childNodes[1];
    // houseItem_opacity_one
    // houseItem_opacity_zero
    if (item == 'paper') {
        img.setAttribute('src', 'img/icon-paper.svg');
        houseItem.classList.remove('item__img_border_yellow');
        itemBorder.classList.add('item__img_border_blue');
    } else if (item == 'rock') {
        img.setAttribute('src', 'img/icon-rock.svg');
        houseItem.classList.remove('item__img_border_yellow');
        itemBorder.classList.add('item__img_border_red');
    } else {
        img.setAttribute('src', 'img/icon-scissors.svg');   
    }
    
    setTimeout(() => {
        houseItem.classList.remove('houseItem_opacity_zero');
        houseItem.classList.add('houseItem_opacity_one');
    }, 1000);
}