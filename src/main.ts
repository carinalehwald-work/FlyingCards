const card = document.querySelector(".card");

const flashcards = [
  {
    question: "Was ist TypeScript?",
    answer:
      "Ein Programmiersprache, die JavaScript um statische Typen erweitert.",
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
  if (card) {
    card.textContent = flashcards[currentIndex]?.question ?? "";
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

card?.addEventListener("click", showNextCard);

card?.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  showPreviousCard();
});
