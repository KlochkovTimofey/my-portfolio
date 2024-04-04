

const cards=document.querySelectorAll(".card")
 
let isFlippedCard=false;
let lockBoard=false;
let firstCard;
let secondCard;
let att=3;

document.querySelector(".al").style.display="none"


document.getElementById("att").innerHTML=att;
document.querySelector(".attempts").style.display="inline-block";   

function setOrder() {
    [...cards].forEach(card => {
        let randomPos=Math.floor(Math.random()*12);
        card.style.order=randomPos;
    })
    att=3;
}
setOrder();
function flipCard(event) {
    let item=event.target.parentElement;
    if(lockBoard) return lockBoard;
    if(event.target.parentElement==firstCard) return firstCard;
    item.classList.add("flip");
    if(!isFlippedCard) {
        isFlippedCard=true;
        firstCard=event.target.parentElement
        return;
    }
    secondCard=event.target.parentElement;
    if(firstCard.dataset.education===secondCard.dataset.education) {
        disableCards();
    }
    else {
        unFlipCard();
    }
}
function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard();
}
function unFlipCard() {
    lockBoard=true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
        att--;
        if(att==0) {
            cards.forEach(card => card.style.display="none")
            document.getElementById("att").innerHTML=att;
            document.querySelector(".attempts").style.display="inline-block";
            document.querySelector(".al").style.display="inline-block";
            document.querySelector(".al").style.position="absolute";
            
        }
    }, 1000);
}
function resetBoard() {
    [isFlippedCard, lockBoard]=[false, false]
    [firstCard, secondCard]=[null, null]
}
cards.forEach(card => card.addEventListener("click", flipCard))
