// declaring a constant and selecting all card elements 
const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo; //declare cardOne and cardTwo
let disableDeck = false;

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
            setTimeout ( () => {
                return shuffleCard();
            }, 1000); // calling shuffle card function after 1s
        };
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; //setting both card value to blank
        return disableDeck = false;
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

shuffleCard();

// add click event to all card element 
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});


