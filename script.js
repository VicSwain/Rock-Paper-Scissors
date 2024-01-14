function playGame() {
    var choices = ['R', 'P', 'S'];
    let userInput = prompt('R, P, S');
    var playerScore = 0;
    var compScore = 0;
    var moves = 0;
    var compChoice = Math.floor(Math.random() *= choices.length);

if (userInput === compChoice ){
    alert("It's a tie");

if (userInput === 'R' && compChoice === 'S' || userInput === 'P', && compChoice === 'R', || userInput === 'S', && compChoice === 'P') {
=======
if (userInput = 'R' && compChoice = 'S' || userInput = 'P' && compChoice = 'R' || userInput = 'S' && compChoice = 'P') {
    alert ("You Win!")
    ++playerScore;  
}
else {
    alert("You Lose");
    ++compScore;
}
    
}