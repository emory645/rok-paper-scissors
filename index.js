var you;
var yourScore = 0;
var opponentScore = 0;
var opponent;

var choices = ['rock','paper','scissors'];

window.onload = function() {
    for(let i = 0; i < 3; i++) {
        let choice = document.createElement('img')
        choice.id = choices[i];
        choice.src = choices[i] + '.png';
        choice.addEventListener('click', selctorChoice);
        document.getElementById("choices").append(choice);
    }
}

function selctorChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + '.png';
}
opponent = choices[Math.floor(Math.random() * 3)];
document.getElementById('opponent-choice').src = opponent + ".png"

    if( you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }