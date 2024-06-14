// declaring a constant and selecting all card elements 
const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo; //declare cardOne and cardTwo
let disableDeck = false;
let matchAttempt = 16;


function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip"); //add flip class in every card clicked
    if(!cardOne) { // prevent to click cardOne again
        // return cardOne value to clickedCard
        return cardOne = clickedCard;
    }

    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("Img").src,
    cardTwoImg = cardTwo.querySelector("Img").src;
    matchCards(cardOneImg, cardTwoImg);
    };
};

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++; // increment matched value by 1
        if (matchedCard == 8){
            winModal(); // calling shuffle card function after 1s
        };
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; //setting both card value to blank
        return disableDeck = false;
    }

    // set attempt
    matchAttempt --;
    attemptsLeft();

    //test create modal
    if (matchAttempt == 0){
        loseModal();
    }

    // if two cards not matched
    setTimeout ( () => {
        // add shake class after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout ( () => {
        // remove shake and flip card after 1200ms
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = ""; //setting both card value to blank
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    console.log("shuffled");
    matchAttempt = 16;
    attemptsLeft();
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    // creating array of 16 items and each item are repeated twice
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); // sorting array item randomly
    
    // removing flip class from all cards and passing random image to each card
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `./img/poke-${arr[index]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard(); //call shuffle
attemptsLeft(); //call attempt

// attempt function
function attemptsLeft(){
    document.querySelector(".attempts").innerHTML = matchAttempt;
};

// modal function
function winModal() {
    document.querySelector(".modal").innerHTML += `<div id="modalContainer" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
  <div class="fixed inset-0 z-10 flex items-center justify-center p-4 overflow-y-auto">
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex h-16 max-w-16 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10">
            <p class="text-4xl">🥳</p>
          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="text-xl font-semibold leading-6 text-gray-900" id="modal-title">Match Success!</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">You have matched all the cards</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button onclick="resetButton()" type="button" class="modalButton inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto">Play again</button>
      </div>
    </div>
  </div>
</div>`;
}

function loseModal() {
    document.querySelector(".modal").innerHTML += `<div id="modalContainer" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
  <div class="fixed inset-0 z-10 flex items-center justify-center p-4 overflow-y-auto">
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex h-16 max-w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <p class="text-4xl">🚩</p>
          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="text-xl font-semibold leading-6 text-gray-900" id="modal-title">Match Failed</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">You can do better next time</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button onclick="resetButton()" type="button" class="modalButton inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto">Play again</button>
      </div>
    </div>
  </div>
</div>`;
}

function resetButton() {
    document.querySelector(".modal").innerHTML = "";
    setTimeout ( () => {
        return shuffleCard();
    }, 1000);
};

// add click event to all card element 
cards.forEach(card => {
    // card.classList.add("flip")
    card.addEventListener("click", flipCard);
});


