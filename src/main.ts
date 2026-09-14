const cardStack = document.querySelector(".card-stack");

const flashcards = [
  {
    question: "Was ist TypeScript?",
    answer:
      "Eine Programmiersprache, die JavaScript um statische Typen erweitert.",
  },
  {
    question: "Was ist HTML?",
    answer: "Eine Auszeichnungssprache zur Strukturierung von Webseiten.",
  },
  {
    question: "Was ist CSS?",
    answer: "Eine Stylesheet-Sprache zur Gestaltung von Webseiten.",
  },
];

let currentIndex = 0;

function showCurrentCard() {
  if (cardStack) {
    cardStack.innerHTML = "";

    flashcards.forEach((flashcard, index) => {
      const card = document.createElement("article");

      card.classList.add("card");

      card.textContent = flashcard.question;

      if (index === currentIndex) {
        card.classList.add("card--current");
      } else if (index === (currentIndex + 1) % flashcards.length) {
        card.classList.add("card--next");
      } else {
        card.classList.add("card--next-next");
      }

      cardStack.appendChild(card);
    });
  }
}

showCurrentCard();

function showNextCard() {
  currentIndex = currentIndex + 1;
  
  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }
  showCurrentCard();
}

function showPreviousCard() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = flashcards.length - 1;
  }
  showCurrentCard();
}

cardStack?.addEventListener("click", () => {
  showNextCard();
});

cardStack?.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showPreviousCard();
});
