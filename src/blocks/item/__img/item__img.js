document.addEventListener('DOMContentLoaded', setUpAnimation);

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

function setUpAnimation() {
    const items = document.querySelectorAll('.item__img');
    for (let item of items) {
        item.addEventListener('click', (e) => {
            prepareGamePlace(e.target)
        });
    }
}

const opacityAnimation = [
    {opacity: '1'},
    {opacity: '0'}
]

const opacityAnimationSettings = {
    circle: {
        duration: 400,
        fill: "forwards"
    }
}

function prepareGamePlace(item) {
    const items = document.querySelectorAll('.item');
    for (let singleItem of items) {
        let animation = singleItem.animate(opacityAnimation, opacityAnimationSettings.circle).persist();
    }
}

function showCircles(item) {
    const circle1 = item.childNodes[1];
    const circle2 = item.childNodes[2];
    const circle3 = item.childNodes[3];

    const circle1Animation = circle1.animate(circle1keyFrames, options.circle1).persist();
    const circle2Animation = circle2.animate(circle2keyFrames, options.circle2).persist();
    const circle3Animation = circle3.animate(circle3keyFrames, options.circle3).persist();
}