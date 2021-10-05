const rick = document.querySelector('.rick');
const morty = document.querySelector('.morty');
const summer = document.querySelector('.summer');
const beth = document.querySelector('.beth');
const jerry = document.querySelector('.jerry');
const Poopybutthole = document.querySelector('.Poopybutthole');
const birdperson = document.querySelector('.birdperson');
const meeseeks = document.querySelector('.meeseeks');
const Goldenfold = document.querySelector('.Goldenfold');
const armagheadon = document.querySelector('.armagheadon');
const scaryterry = document.querySelector('.scaryterry');

window.addEventListener('click', function (e) {
    console.log(e.target)
    const rickAudio = document.querySelector('audio[data-key="1"]');
    const mortyAudio = document.querySelector('audio[data-key="2"]');
    const summerAudio = document.querySelector('audio[data-key="3"]');
    const bethAudio = document.querySelector('audio[data-key="4"]');
    const jerryAudio = document.querySelector('audio[data-key="5"]');
    const PoopybuttholeAudio = document.querySelector('audio[data-key="6"]');
    const birdpersonAudio = document.querySelector('audio[data-key="7"]');
    const meeseeksAudio = document.querySelector('audio[data-key="8"]');
    const GoldenfoldAudio = document.querySelector('audio[data-key="9"]');
    const armagheadonAudio = document.querySelector('audio[data-key="10"]');
    const scaryterryAudio = document.querySelector('audio[data-key="11"]');

    if (e.target.classList.contains('rick')) {
        rickAudio.currentTime = 0;
        rickAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('morty')) {
        mortyAudio.currentTime = 0;
        mortyAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('summer')) {
        summerAudio.currentTime = 0;
        summerAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('beth')) {
        bethAudio.currentTime = 0;
        bethAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('jerry')) {
        jerryAudio.currentTime = 0;
        jerryAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('Poopybutthole')) {
        PoopybuttholeAudio.currentTime = 0;
        PoopybuttholeAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('birdperson')) {
        birdpersonAudio.currentTime = 0;
        birdpersonAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('meeseeks')) {
        meeseeksAudio.currentTime = 0;
        meeseeksAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('Goldenfold')) {
        GoldenfoldAudio.currentTime = 0;
        GoldenfoldAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('armagheadon')) {
        armagheadonAudio.currentTime = 0;
        armagheadonAudio.play();
        e.target.classList.add('click');
    } else if (e.target.classList.contains('scaryterry')) {
        scaryterryAudio.currentTime = 0;
        scaryterryAudio.play();
        e.target.classList.add('click');
    } else {
        return;
    }
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('click');
}

const image = document.querySelectorAll('.image');
console.log(image)

image.forEach(image => image.addEventListener('transitionend', removeTransition));