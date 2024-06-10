// declaring a constant and selecting all card elements 
const cards = document.querySelectorAll(".card");

function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    clickedCard.classList.add("flip"); //add flip class in every card clicked
};

// add click event to all card element 
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});