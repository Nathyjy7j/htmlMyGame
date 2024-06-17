var cols = ["col0","col1","col2","col3","col4","col5","col6","col7","col8"]
var textsCol = ["","","","","","","","",""]
var yesCols = [false,false,false,false,false,false,false,false,false]
var currentPlet = true
var winener = false;
var isFull = false;
dorwStrt()

function dorwStrt(){
    for(var i=0;i<cols.length;i++){
        document.getElementById(`${cols[i]}`).innerHTML = ""
        document.getElementById(`${cols[i]}`).style = "background-color: #252A34;"
    }
}

function backgroundWinwer(id){
    document.getElementById(`${cols[id]}`).style = "background-color: #08D9D6;"
}


function yesOrNofull(){
    if(!winener){
        for(var i=0;i<yesCols.length;i++){
            if(yesCols[i]){
                isFull = true
            }else{
                isFull = false
    
                return false
            }     
        }
        if(isFull){
            printWiner("הכל מלא אין מנצח")
            document.getElementById("play-again").style.display = 'inline'
        }
    }
 
   
}

function printWiner(text){
    document.getElementById("results").innerHTML = text
    document.getElementById("play-again").style.display = 'inline'

}



function myRestart(){
    document.getElementById("results").innerHTML = ""
    console.log("yes")
    dorwStrt()
     textsCol = ["","","","","","","","",""]
     yesCols = [false,false,false,false,false,false,false,false,false]
     currentPlet = true
     winener = false;
     isFull = false
    document.querySelector(".bg").style.left = "0"
}

function printCOl(id){
    document.getElementById(`${id}`).style = " background-color: red;"
    document.getElementById(`${id}`).style.color = "red;"

}

function flip(){
    if(currentPlet){
        currentPlet = false
    }else{
        currentPlet = true
    }
}

function printOutXorO(id){
    if(currentPlet){
        document.getElementById(`${id}`).innerHTML = "X"
        document.querySelector(".bg").style.left = "85px"
        cheakWin("X")
        flip()
    }else{
        document.getElementById(`${id}`).innerHTML = "O"
        document.querySelector(".bg").style.left = "0"
        cheakWin("O")
        flip()
    }
    yesCols[id] = true

}

function cheakWin(mySb){
    if(textsCol[0] ==  mySb && textsCol[1] ==  mySb && textsCol[2] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(0)
        backgroundWinwer(1)
        backgroundWinwer(2)
    }
    else  if(textsCol[3] ==  mySb && textsCol[4] ==  mySb && textsCol[5] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(3)
        backgroundWinwer(4)
        backgroundWinwer(5)
    }
    else if(textsCol[6] ==  mySb && textsCol[7] ==  mySb && textsCol[8] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(6)
        backgroundWinwer(7)
        backgroundWinwer(8)
    }
    else if(textsCol[0] ==  mySb && textsCol[3] ==  mySb && textsCol[6] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(0)
        backgroundWinwer(3)
        backgroundWinwer(6)
    }
    else  if(textsCol[1] ==  mySb && textsCol[4] ==  mySb && textsCol[7] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(1)
        backgroundWinwer(4)
        backgroundWinwer(7)
    }
    else  if(textsCol[2] ==  mySb && textsCol[5] ==  mySb && textsCol[8] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(2)
        backgroundWinwer(5)
        backgroundWinwer(8)
    }
    else if(textsCol[0] ==  mySb && textsCol[4] ==  mySb && textsCol[8] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(0)
        backgroundWinwer(4)
        backgroundWinwer(8)
    }
    else if(textsCol[2] ==  mySb && textsCol[4] ==  mySb && textsCol[6] == mySb){
        if(mySb == "X"){
            printWiner("המנצח הוא האקס")
        }
        else if(mySb == "O"){
                printWiner("המנצח הוא עיגול")
        }
        winener = true
        backgroundWinwer(2)
        backgroundWinwer(4)
        backgroundWinwer(6)
    }

}

function drowMain(myInput){
    if(!isFull){
        if(!winener){    
            if(!yesCols[myInput]){
                if(currentPlet){
                    textsCol[myInput] = "X"
                }
                else{
                    textsCol[myInput] = "O"
                }
    
                yesCols[myInput] = true
    
                printOutXorO(cols[myInput])
                yesOrNofull()      
            }
        }
    }else{
        printWiner("הכל מלא אין מנצח")
        document.getElementById("play-again").style.display = 'inline'
    }

   

}