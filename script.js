const newFlipcard = document.querySelector('.flip-card');
newFlipcard.classList.add('active');

let OneWord = 0;

const words = {
    Enwords: ["SUN", "FRUIT", "APPLE", "GLASS", "SPOON", "BABY", "GIRL", "BOY"],
    Ruswords: ["СОЛНЦЕ", "ФРУКТЫ", "ЯБЛОКО", "СТЕКЛО", "ЛОЖКА", "РЕБЕНОК", "ДЕВОЧКА", "МАЛЬЧИК"],
    examples: ["The sun is an ordinary star", "Eating fruit has many health", "An apple is a sweet", "Glass is a non-crystalline", "A spoon is a utensil consisting of a shallow bowl", "A baby is a human younger than about 1 or 2 years old", "A girl is a young female human", "A boy is a young male human"]
};

const container = document.querySelector('#card-front h1');
container.textContent = words.Enwords[OneWord];

function upendCard() {
    this.classList.toggle('flip')
}




newFlipcard.addEventListener('click', upendCard => {
    if (newFlipcard.classList.contains('active')) {
        newFlipcard.classList.remove('active');
    } else {
        newFlipcard.classList.add('active');
    }

});

const containerOne = document.querySelector('#card-back h1');
containerOne.textContent = words.Ruswords[OneWord];


const NextCard = document.querySelector("#next");
const BackCard = document.querySelector("#back");
const ExampleCard = document.querySelector('#card-back p span');



const sizeArray = words.Ruswords.length;
const currentWord = document.querySelector("#current-word");
const WordsProgress = document.querySelector("#words-progress");
const totalWord = document.querySelector("#total-word");
totalWord.textContent = sizeArray;

function makeProgress(i) {
    return (100 * (i + 1)) / sizeArray;
}

container.textContent = words.Enwords[0];
containerOne.textContent = words.Ruswords[0];
ExampleCard.textContent = words.examples[0];

NextCard.addEventListener('click', () => {
    if (OneWord >= sizeArray - 1) {
        return;
    } else {
        OneWord++;
        currentWord.textContent = OneWord + 1;
        WordsProgress.value = makeProgress(OneWord);
        BackCard.disabled = false;
        container.textContent = words.Enwords[OneWord];
        containerOne.textContent = words.Ruswords[OneWord];
        ExampleCard.textContent = words.examples[OneWord];
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
        WordsProgress.value = makeProgress(OneWord);
        currentWord.textContent = OneWord + 1;
        NextCard.disabled = false;
        container.textContent = words.Enwords[OneWord];
        containerOne.textContent = words.Ruswords[OneWord];
        ExampleCard.textContent = words.examples[OneWord];
        if (OneWord <= 0) {
            BackCard.disabled = true;
        }
    }
});


const examCards = document.querySelector("#exam-cards");
const exam = document.querySelector("#exam");
const CardTime = document.querySelector("#time");
let timer;



let minutes = "0";
let seconds = "0";

exam.addEventListener('click', () => {
    timer = setInterval(() => {

        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10) {
            CardTime.textContent = minutes + ":0" + seconds;
        } else {
            CardTime.textContent = minutes + ":" + seconds;
        }
    }
    )


    newFlipcard.hidden = true;
    document.querySelector("#exam-mode").classList.remove("hidden");
    document.querySelector("#study-mode").hidden = true;
    document.querySelector(".slider-controls").hidden = true;


    let DoobleCard = examCards.children;
    let fragment = document.createDocumentFragment();



    for (let i = 0; i < sizeArray * 2; i++) {
        if (i < sizeArray) {
            const PrimCard = document.createElement('div');
            PrimCard.classList.add("card");
            PrimCard.textContent = words.Ruswords[i];
            examCards.append(PrimCard);
        } else {

            const PrimCard = document.createElement('div');
            PrimCard.classList.add("card");
            PrimCard.textContent = words.Enwords[i - sizeArray];
            examCards.append(PrimCard);
        }

        while (DoobleCard.length) {
            fragment.appendChild(DoobleCard[Math.floor(Math.random() * DoobleCard.length)]);
        }
        examCards.appendChild(fragment);

    }
});


let click = false;
let theEnd = 0;
let oneCard = 0;
let firstCard = 0;
let twoCard = 0;
let secondCard = 0;

examCards.addEventListener('click', (event) => {
    let PrimaCard = event.target.closest('.card');
    if (click == false) {
        PrimaCard.classList.add('correct');
        oneCard = PrimaCard;
        firstCard = words.Enwords.indexOf(PrimaCard.textContent);
        if (firstCard == -1) {
            firstCard = words.Ruswords.indexOf(PrimaCard.textContent);
        }
        click = true;

    } else if (click == true) {
        twoCard = PrimaCard;
        secondCard = words.Enwords.indexOf(PrimaCard.textContent);
        if (secondCard == -1) {
            secondCard = words.Ruswords.indexOf(PrimaCard.textContent);
        }
        if (firstCard == secondCard) {
            theEnd++;
            twoCard.classList.add('correct');
            oneCard.classList.add('fade-out');
            twoCard.classList.add('fade-out');
            if (theEnd == sizeArray) {
                alert(`Время ${CardTime.textContent}`);
                clearInterval(timer);
            }
            click = false;
        } else if (firstCard != secondCard) {
            click = false;
            twoCard.classList.add('wrong');
            setTimeout(() => {
                oneCard.classList.remove('correct');
                twoCard.classList.remove('wrong');
            }, 500);
        }
    }
});
