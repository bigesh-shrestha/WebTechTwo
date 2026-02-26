const cardsList = document.getElementById("cardsList");
const shuffleCards = document.getElementById("shuffleCards");
let cards = ['A', 1,2,3,4,5,6,7,8,9,10, 'K','J','Q'];
cardsList.innerHTML = `Cards : ${cards.join(' ')}`;
shuffleCards.onclick = function(){
    for(let i = cards.length -1 ; i>0; i--){
        let random = Math.floor(Math.random() * i);
        [cards[i], cards[random]] = [cards[random], cards[i]];
    }
    cardsList.innerHTML = `Shuffled Cards: ${cards.join(' ')}`;
}
    