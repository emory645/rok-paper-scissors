var you;
var yourScore = 0;
var oppenent;
var oppenentScore = 0;

var choices = ["Rock", "paper", "scissors"];

window.onload = function(){
    for (let i = 0; i < 3; i++){
        let.choice = document.createElement("img");
        choices.id = choices[i];
        choices.src = choices[i] + ".png";
        document.getElementById("choices").append(choice);
    }
}