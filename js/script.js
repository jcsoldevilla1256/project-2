// declaring a constant and selecting all card elements 
const cards = document.querySelectorAll(".card");

let cardOne, cardTwo; //declare cardOne and cardTwo

function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if (clickedCard !== cardOne) {
        clickedCard.classList.add("flip"); //add flip class in every card clicked
    if(!cardOne) { // prevent to click cardOne again
        // return cardOne value to clickedCard
        return cardOne = clickedCard;
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("Img").src,
    cardTwoImg = cardTwo.querySelector("Img").src;
    matchCards(cardOneImg, cardTwoImg);
    };
};

function matchCards(img1, img2) {
    if(img1 === img2) {
        return console.log("card matched");
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
    }, 1200);
}

// add click event to all card element 
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});