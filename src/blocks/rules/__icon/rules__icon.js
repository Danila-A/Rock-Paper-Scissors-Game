document.addEventListener('DOMContentLoaded', replaceCloseIcon);

function replaceCloseIcon() {
    const oldCloseIcon = document.querySelector('.closeIcon');
    fetch('img/icon-close.svg')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const newCloseIcon = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
        newCloseIcon.setAttribute('class', 'closeIcon');
        oldCloseIcon.replaceWith(newCloseIcon);
        newCloseIcon.addEventListener('click', closePopup);
    });
}

function closePopup() {
    const popup = document.querySelector('.rules');
    popup.removeAttribute('open');
}