document.addEventListener('DOMContentLoaded', setUpAnimation);



function setUpAnimation() {
    const items = document.querySelectorAll('.item__img');
    for (let item of items) {
        item.addEventListener('click', (e) => {
            prepareGamePlace(e.target);
            startGame(e.target);
        });
    }
}

const opacityAnimation = [
    {opacity: '1'},
    {opacity: '0'}
];

const opacityAnimationSettings = {
    circle: {
        duration: 400,
        fill: "forwards"
    }
};

const itemTransformAnimation = [
    {
        transform: 'translateX(0%)',
        right: '30%', 
        left: 'auto',
        top: '0',
    }
];

const targetItemAnimation = [
    {
        transform: 'translateX(0%)',
        right: 'auto', 
        left: '30%',
        top: '0',
    }
];

const placeDownAnimation = [
    {top: '20%'}
];



function prepareGamePlace(item) {
    const items = document.querySelectorAll('.item');
    const itemsArray = Array.from(items);
    const targetItem = item.closest('.item');
    const houseItem = document.querySelector('.houseItem');
    const triangle = document.querySelector('.main__triangle');
    const darkCircle = document.querySelector('.darkCircle');

    removeItem(itemsArray, targetItem);
    removeItem(itemsArray, darkCircle);
    removeItem(itemsArray, houseItem);


    makeAnimation(targetItem, targetItemAnimation, opacityAnimationSettings.circle);
    makeAnimation(triangle, opacityAnimation, opacityAnimationSettings.circle);

    for (let singleItem of itemsArray) {
        makeAnimation(singleItem, opacityAnimation, opacityAnimationSettings.circle);

    }

    makeAnimation(targetItem, placeDownAnimation, opacityAnimationSettings.circle);
    makeAnimation(houseItem, placeDownAnimation, opacityAnimationSettings.circle);
    makeAnimation(darkCircle, placeDownAnimation, opacityAnimationSettings.circle);
}

async function makeAnimation(target, animation, settings) {
    const targetAnimation = target.animate(animation, settings);
    await targetAnimation.finished;
    targetAnimation.commitStyles();
    targetAnimation.cancel();
}

function removeItem(array, item) {
    const itemindex = array.indexOf(item);
    if(itemindex > -1) {
        array.splice(itemindex, 1);
    }  
}

