//1. Player ne kya choice kiya
//2. Computer ne kya choice kiya
//3. Game khelo !!
//4 Display the winners

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".imge");

const playerScorePara = document.querySelector("#player_score");
const compScorePara = document.querySelector("#comp_score");

const msg = document.querySelector("#result");


const generateCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    //console.log(options[randIdx]);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        console.log(userScore);
        playerScorePara.innerText = userScore;
        msg.innerText = `You won ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        console.log(compScore);
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    //console.log("Player choice: ", userChoice);
    const compChoice = generateCompChoice();
    //console.log("Computer Choice: ", compChoice);

    
    if(userChoice===compChoice){
        //console.log("Game was draw");
        msg.innerText = "Game is Draw | Play Again."
        msg.style.backgroundColor = "black";
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin  = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        console.log("Winner", userWin);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");

        //console.log(userChoice);
        playGame(userChoice);
    });
});
