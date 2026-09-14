const cardStack = document.querySelector(".card-stack");
const restartButton = document.querySelector(".restart-button");

if (!cardStack) {
  throw new Error("Card stack wurde nicht gefunden.");
}

const cardStackElement = cardStack;

const flashcards = [
  {
    question: "Karte 1",
    answer: "Antwort 1",
  },
  {
    question: "Karte 2",
    answer: "Antwort 2",
  },
  {
    question: "Karte 3",
    answer: "Antwort 3",
  },
  {
    question: "Karte 4",
    answer: "Antwort 4",
  },
  {
    question: "Karte 5",
    answer: "Antwort 5",
  },
  {
    question: "Karte 6",
    answer: "Antwort 6",
  },
];

const startCard = {
  title: "JavaScript Grundlagen",
  description: "Dein Lernkartenstapel",
};

const showStartCard = true;

let currentIndex = 0;
let isAnimating = false;
let isFinished = false;
let isStartCardVisible = showStartCard;

function createStartCard(animateInitialStack: boolean) {
  const card = document.createElement("article");

  card.classList.add("card", "card--start", "card--current");

  if (animateInitialStack) {
    card.classList.add("card--initial", "card--initial-front");
  }

  card.innerHTML = `
    <h2>${startCard.title}</h2>
    <p>${startCard.description}</p>
    <span>${flashcards.length} Karten</span>
  `;

  return card;
}

function showCurrentCard(animateNewCard = false, animateInitialStack = false) {
  cardStackElement.innerHTML = "";

  if (isFinished) {
    return;
  }

  if (showStartCard && isStartCardVisible) {
    cardStackElement.appendChild(createStartCard(animateInitialStack));

    const firstCard = flashcards[currentIndex];

    if (firstCard) {
      const card = document.createElement("article");

      card.classList.add("card", "card--next");

      if (animateInitialStack) {
        card.classList.add(
          "card--initial",
          "card--initial-middle",
          "card--initial-hidden",
        );
      }

      card.textContent = firstCard.question;
      cardStackElement.appendChild(card);
    }

    const secondCard = flashcards[currentIndex + 1];

    if (secondCard) {
      const card = document.createElement("article");

      card.classList.add("card", "card--next-next");

      if (animateInitialStack) {
        card.classList.add(
          "card--initial",
          "card--initial-back",
          "card--initial-hidden",
        );
      }

      card.textContent = secondCard.question;
      cardStackElement.appendChild(card);
    }

    return;
  }

  const visibleCards = Math.min(3, flashcards.length - currentIndex);

  for (let offset = 0; offset < visibleCards; offset++) {
    const index = currentIndex + offset;
    const flashcard = flashcards[index];

    if (!flashcard) {
      continue;
    }

    const card = document.createElement("article");

    card.classList.add("card");

    card.textContent = flashcard.question;

    if (offset === 0) {
      card.classList.add("card--current");

      if (animateInitialStack) {
        card.classList.add("card--initial", "card--initial-front");
      }
    } else if (offset === 1) {
      card.classList.add("card--next");

      if (animateInitialStack) {
        card.classList.add(
          "card--initial",
          "card--initial-middle",
          "card--initial-hidden",
        );
      }
    } else {
      card.classList.add("card--next-next");

      if (animateNewCard) {
        card.classList.add("card--appearing");
      }

      if (animateInitialStack) {
        card.classList.add(
          "card--initial",
          "card--initial-back",
          "card--initial-hidden",
        );
      }
    }

    cardStackElement.appendChild(card);
  }
}

function showRestartButton() {
  restartButton?.classList.add("restart-button--visible");
}

function finishInitialAnimation() {
  const initialCards = cardStackElement.querySelectorAll(".card--initial");

  initialCards.forEach((card) => {
    card.classList.remove(
      "card--initial",
      "card--initial-front",
      "card--initial-middle",
      "card--initial-back",
    );
  });
}

isAnimating = true;

showCurrentCard(false, true);

setTimeout(() => {
  finishInitialAnimation();
  isAnimating = false;
}, 1150);

function showNextCard() {
  if (isAnimating || isFinished) {
    return;
  }

  isAnimating = true;

  if (isStartCardVisible) {
    const startCard = cardStackElement.querySelector(".card--start");
    const nextCard = cardStackElement.querySelector(".card--next");
    const nextNextCard = cardStackElement.querySelector(".card--next-next");

    startCard?.classList.add("card--leaving");
    nextCard?.classList.add("card--moving-forward");
    nextNextCard?.classList.add("card--moving-forward-next");

    isStartCardVisible = false;

    setTimeout(() => {
      currentIndex = 0;
      showCurrentCard();
      isAnimating = false;
    }, 400);

    return;
  }

  const currentCard = cardStackElement.querySelector(".card--current");
  const nextCard = cardStackElement.querySelector(".card--next");
  const nextNextCard = cardStackElement.querySelector(".card--next-next");

  currentCard?.classList.add("card--leaving");
  nextCard?.classList.add("card--moving-forward");
  nextNextCard?.classList.add("card--moving-forward-next");

  setTimeout(() => {
    if (currentIndex === flashcards.length - 1) {
      isFinished = true;

      cardStackElement.innerHTML = "";

      showRestartButton();

      isAnimating = false;
      return;
    }

    currentIndex = currentIndex + 1;

    showCurrentCard(true);
    isAnimating = false;
  }, 400);
}
function showPreviousCard() {
  if (isStartCardVisible) {
    return;
  }
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

function restartCards() {
  currentIndex = 0;
  isFinished = false;
  isAnimating = true;
  isStartCardVisible = showStartCard;

  restartButton?.classList.remove("restart-button--visible");

  showCurrentCard(false, true);

  setTimeout(() => {
    finishInitialAnimation();
    isAnimating = false;
  }, 1150);
}

restartButton?.addEventListener("click", () => {
  restartCards();
});
