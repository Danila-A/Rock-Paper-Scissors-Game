const button = document.querySelector('.button');
button.addEventListener('click', showOrHidePopup);

function showOrHidePopup() {
    const popup = document.querySelector('.rules');
    popup.toggleAttribute("open");
}