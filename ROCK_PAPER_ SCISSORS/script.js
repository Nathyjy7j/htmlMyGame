var scoreUser = 0
var scoreComputet = 0

function playGame(Input){
    var NumRdom = Math.floor(Math.random() * 3) 
    var computer = "";
    switch(NumRdom){
        case 0:
            computer = "rock"
            break
        case 1:
            computer = "paper";
            break
        case 2:
            computer = "scissors";
            break
         default:
            break;   
    }

    winer(Input,computer)
}


function winer(User,Computer){
   var winer =  document.getElementById("winer")
   var UserCount = document.getElementById("UserCount")
   var ComputerCount = document.getElementById("ComputerCount")

    if(User == Computer){
        winer.innerHTML = "תיקו"
    }
    else if(User == "rock" && Computer == "paper"){
        scoreUser++;
        winer.innerHTML = "השחקן ניצח"
    }else if (User == "paper" && Computer == "rock"){
        scoreUser++;
        winer.innerHTML = "השחקן ניצח"
    }else if(User == "scissors" && Computer == "paper"){
        scoreUser++;
        winer.innerHTML = "השחקן ניצח"
    }else{
        winer.innerHTML = "המחשב ניצח"
        scoreComputet++
    }



    UserCount.innerText =  "ניקוד שחקן" + scoreUser
    ComputerCount.innerHTML =   "ניקוד מחשב"+ scoreComputet
    console.log(User)
    console.log(Computer)

}