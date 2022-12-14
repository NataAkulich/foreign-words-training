const newFlipcard = document.querySelector('.flip-card');
newFlipcard.classList.add('active');



const container = document.querySelector('#card-front');
container.textContent = 'sun';

const cards = document.querySelector('.flip-card');

function upendCard() {
    this.classList.toggle('flip');
}
cards.addEventListener('click', upendCard);

const containerOne = document.querySelector('#card-back');
containerOne.textContent = 'солнце';


const sliderLine = document.querySelector('.slider-controls');
document.querySelector('.slider-controls').addEventListener(click, function() {});