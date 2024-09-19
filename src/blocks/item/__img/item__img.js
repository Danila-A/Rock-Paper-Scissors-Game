document.addEventListener('DOMContentLoaded', setUpAnimation);



function setUpAnimation() {
    const items = document.querySelectorAll('.item__img');
    for (let item of items) {
        item.addEventListener('click', (e) => {
            prepareGamePlace(e.target);
            startGame(e.target);
        });
    }
    addRestartEvent();
    gameField = document.querySelector('.main');
    copiedGameField = gameField.cloneNode(true);
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

const itemTransformAnimation = {
    fullScreen: [
                    {
                        transform: 'translateX(0%)',
                        right: '30%', 
                        left: 'auto',
                        top: '0',
                    }
                ],
    tablet:  [
                {
                    transform: 'translateX(0%)',
                    right: '12%', 
                    left: 'auto',
                    top: '0',
                }
            ],
};

const targetItemAnimation = {
    fullScreen: [
                    {
                        transform: 'translateX(0%)',
                        right: 'auto', 
                        left: '30%',
                        top: '0',
                    }
                ],
    tablet: [
                {
                    transform: 'translateX(0%)',
                    right: 'auto', 
                    left: '12%',
                    top: '0',
                }
            ],
};

const placeDownAnimation = {
    fullScreen: [
                    {top: '20%'}
                ],
    mobileScreen: [
                        {top: '10%'}
                    ],             
};



function prepareGamePlace(item) {
    const items = document.querySelectorAll('.item');
    const itemsArray = Array.from(items);
    const targetItem = item.closest('.item');
    const houseItem = document.querySelector('.houseItem');
    const triangle = document.querySelector('.main__triangle');
    const darkCircle = document.querySelector('.darkCircle');

    const targetItemTitle = targetItem.childNodes[0].childNodes[0];
    const houseItemTitle = houseItem.childNodes[0].childNodes[0];
    targetItemTitle.style.opacity = 1;
    houseItemTitle.style.opacity = 1;

    removeItem(itemsArray, targetItem);
    removeItem(itemsArray, darkCircle);
    removeItem(itemsArray, houseItem);

    if(window.innerWidth <= 1024) {
        makeAnimation(targetItem, targetItemAnimation.tablet, opacityAnimationSettings.circle);    
    }
    else {
        makeAnimation(targetItem, targetItemAnimation.fullScreen, opacityAnimationSettings.circle);
    }
    
    makeAnimation(triangle, opacityAnimation, opacityAnimationSettings.circle);

    

    for (let singleItem of itemsArray) {
        makeAnimation(singleItem, opacityAnimation, opacityAnimationSettings.circle);

    }

    if(window.innerWidth <= 720) {
        makeAnimation(targetItem, placeDownAnimation.mobileScreen, opacityAnimationSettings.circle);
        makeAnimation(houseItem, placeDownAnimation.mobileScreen, opacityAnimationSettings.circle);
        makeAnimation(darkCircle, placeDownAnimation.mobileScreen, opacityAnimationSettings.circle);        
    }
    else {
        makeAnimation(targetItem, placeDownAnimation.fullScreen, opacityAnimationSettings.circle);
        makeAnimation(houseItem, placeDownAnimation.fullScreen, opacityAnimationSettings.circle);
        makeAnimation(darkCircle, placeDownAnimation.fullScreen, opacityAnimationSettings.circle);
    }
    
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

