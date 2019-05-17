let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main() {

    rock_div.addEventListener('click', function (){
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(user)+ "beats "+ convertToWord(comp) + ". You win!"
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('green-glow')},300);
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(comp)+ "beats "+ convertToWord(user) + ". You lost!"
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('red-glow')},300);
}

function draw(user ,comp) {
    result_p.innerHTML = convertToWord(comp)+ " vs "+ convertToWord(user) + "? Its a draw!"
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('gray-glow')},300);
}

