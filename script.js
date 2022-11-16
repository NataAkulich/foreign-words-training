const newFlipcard = document.querySelector('.flip-card');
newFlipcard.classList.add('active');

const container = document.querySelector('#card-front');
const textCardfront = document.createElement('p');
textCardfront.textContent = 'sun';
container.prepend(textCardfront);



const cards = document.querySelector('.flip-card');

function upendCard() {
    this.classList.toggle('flip');
}
cards.addEventListener('click', upendCard);


const container = document.querySelector('#card-back');
const textCardback = document.createElement('p');
textCardback.textContent = 'солнце';
container.prepend(textCardback);