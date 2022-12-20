const newFlipcard = document.querySelector('.flip-card');
newFlipcard.classList.add('active');

let OneWord = 0;

const worlds = {
    EnWorlds: ["SUN", "FRUIT", "APPLE", "GLASS", "SPOON", "BABY", "GIRL", "BOY"],
    RusWorlds: ["СОЛНЦЕ", "ФРУКТЫ", "ЯБЛОКО", "СТЕКЛО", "ЛОЖКА", "РЕБЕНОК", "ДЕВОЧКА", "МАЛЬЧИК"],
    examples: ["The sun is an ordinary star", "Eating fruit has many health", "An apple is a sweet", "Glass is a non-crystalline", "A spoon is a utensil consisting of a shallow bowl", "A baby is a human younger than about 1 or 2 years old", "A girl is a young female human", "A boy is a young male human"]
};

const container = document.querySelector('#card-front');
container.textContent = worlds.EnWorlds[OneWord];
const cards = document.querySelector('.flip-card');

function upendCard() {
    this.classList.toggle('flip');
}
cards.addEventListener('click', upendCard);

const containerOne = document.querySelector('#card-back');
containerOne.textContent = worlds.RusWorlds[OneWord];



const NextCard = document.querySelector("#next");
const BackCard = document.querySelector("#back");



const sizeArray = worlds.RusWorlds.length;
const currentWord = document.querySelector("#current-word");
const WordsProgress = document.querySelector("#words-progress");
const ExamProgress = document.querySelector("#exam-progress");
const totalWord = document.querySelector("#total-word");



function getProgress(i) {
    return (100 * (i + 1)) / sizeArray;
}
container.textContent = worlds.EnWorlds[0];
containerOne.textContent = worlds.RusWorlds[0];
currentWord.textContent = worlds.examples[0];
WordsProgress.value = getProgress(0);
currentWord.textContent = 1;
totalWord.textContent = sizeArray;
newFlipcard.addEventListener('click', () => {
    if (newFlipcard.classList.contains("active")) {
        newFlipcard.classList.remove("active");
    } else {
        newFlipcard.classList.add("active");
    }

})

NextCard.addEventListener('click', () => {
    if (OneWord >= sizeArray - 1) {
        return;
    } else {
        OneWord++;
        currentWord.textContent = OneWord + 1;
        WordsProgress.value = getProgress(OneWord);
        BackCard.disabled = false;
        container.textContent = worlds.EnWorlds[OneWord];
        BackCard.textContent = worlds.RusWorlds[OneWord];
        currentWord.textContent = worlds.examples[OneWord];
        if (OneWord >= sizeArray - 1) {
            NextCard.disabled = true;
        }
    }

})
BackCard.addEventListener('click', () => {
    if (OneWord <= 0) {
        return;
    } else {
        OneWord--;
        WordsProgress.value = getProgress(OneWord);
        currentWord.textContent = OneWord + 1;
        NextCard.disabled = false;
        container.textContent = worlds.EnWorlds[OneWord];
        BackCard.textContent = worlds.RusWorlds[OneWord];
        currentWord.textContent = worlds.examples[OneWord];
        if (OneWord <= 0) {
            BackCard.disabled = true;
        }
    }
});