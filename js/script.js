// declaring a constant and selecting all card elements 
const cards = document.querySelectorAll(".card");

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

// add click event to all card element 
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});