let score = {
    computer: 0,
    user: 0,
    tie: 0,

 updateScore: function(){
    document.querySelector('#score').innerHTML = `Score: Computer Won: ${this.computer}, User Won: ${this.user}, Tie: ${this.tie}`
 },
 
 saveScore : function(){
    let scoreStr = JSON.stringify(this);
    localStorage.setItem('score',scoreStr);
    console.log(`Score saver ${scoreStr}`);
 }
}

function resetScore(){
    score.computer = 0;
        score.user = 0;
        score.tie = 0;
        score.updateScore();
}

function initialize(){
    let scoreStr = localStorage.getItem('score');
    if(scoreStr){
        console.log(`Previous Score found ${scoreStr}`);
        let scoreVal = JSON.parse(scoreStr);
        score.computer = scoreVal.computer;
        score.user = scoreVal.user;
        score.tie = scoreVal.tie;
        score.updateScore();
    }
}

function getRandomChoice(){
 let randomChoice = Math.floor(Math.random()*3 + 1);
 return randomChoice;
}

function gateComChoice(){
let randomChoice = getRandomChoice();
let comChoiceText;
    if(randomChoice === 1){
        comChoiceText = `✊Rock`;
    }
    else if(randomChoice === 2){
        comChoiceText = `✋Paper`;   
    }
    else{
        comChoiceText = `✌️Scissors`;
    }
 
    return comChoiceText;
}

function updateResult(userChoice,computerChoice, finalResult){ 
 
    document.getElementById('result').innerHTML = `You chose ${userChoice}.<br> Computer chose ${computerChoice}
    <br>
    <br>
    And the result is: ${finalResult}`;
  
    // alert(document.getElementById('result').innerHTML = `You chose ${userChoice}.<br> Computer chose ${computerChoice}
    // <br>
    // <br>
    // And the result is: ${finalResult}`);

}

function computeResult(userChoice,comChoice){
    let result;
    if(userChoice === comChoice ){
        result = 'Tie';
        score.tie++;
    }
    else if(comChoice == `✊Rock` && userChoice === '✌️Scissors'||
            comChoice == `✌️Scissors` && userChoice === '✋Paper'||
            comChoice == `✋Paper` && userChoice === '✊Rock'
    ){
        result = 'You Loose';
        score.computer++;
    }
    else{
        result ='You win';
        score.user++;
    }
    score.updateScore();
    score.saveScore();

    return result;
}

function rockClicked() {
    let userChoice = '✊Rock';
    gateComChoice();
    let comChoice = gateComChoice();
    let result = computeResult(userChoice,comChoice);
    updateResult(userChoice,comChoice,result);

}

function paperClicked(){
    let userChoice = '✋Paper';
    gateComChoice();
    let comChoice1 = gateComChoice();
    let result = computeResult(userChoice,comChoice1);
    updateResult(userChoice,comChoice1,result);
}

function ScissorsClicked(){
    let userChoice = '✌️Scissors';
    gateComChoice();
    let comChoice2 = gateComChoice();
    let result = computeResult(userChoice,comChoice2);
    updateResult(userChoice,comChoice2,result);
} 

initialize();