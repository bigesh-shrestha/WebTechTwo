function rollDice(){
    const diceNumber= Number(document.getElementById("diceNumber").value);
    const rollResult= document.getElementById("rollResult");
    const showDice = document.getElementById("showDice");
    let result = [];
    let images = [];
    for(let i = 0; i< diceNumber; i++){
        const generate = Math.floor(Math.random() * 6) + 1;
        result.push(generate);
        images.push(`<img src = "../images/dices/${generate}.png" width = "100" height = "100" alt = "DICE : ${generate}">`);
    }
    rollResult.innerHTML = `<br><hr>Dices Rolled : ${result.join(", ")}`;
    showDice.innerHTML = `<hr><br>${images.join(" ")}`;
}