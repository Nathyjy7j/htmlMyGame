var idRow1 = ["row1_1","row1_2","row1_3","row1_4","row1_5","row1_6","row1_7"]
var textRow1 = ["","","","","","",""]
var countRow1 = 0 
//----
var idRow2 = ["row2_1","row2_2","row2_3","row2_4","row2_5","row2_6","row2_7"]
var textRow2 = ["","","","","","",""]
var countRow2 = 0 
//----
var idRow3 = ["row3_1","row3_2","row3_3","row3_4","row3_5","row3_6","row3_7"]
var textRow3 = ["","","","","","",""]
var countRow3 = 0 
//---
var idRow4 = ["row4_1","row4_2","row4_3","row4_4","row4_5","row4_6","row4_7"]
var textRow4 = ["","","","","","",""]
var countRow4 = 0 
//---
var idRow5 = ["row5_1","row5_2","row5_3","row5_4","row5_5","row5_6","row5_7"]
var countRow5 = 0 
var textRow5 = ["","","","","","",""]
//--
var idRow6 = ["row6_1","row6_2","row6_3","row6_4","row6_5","row6_6","row6_7"]
var textRow6 = ["","","","","","",""]
var countRow6 = 0 
//----
var idRow7 = ["row7_1","row7_2","row7_3","row7_4","row7_5","row7_6","row7_7"]
var countRow7 = 0 
var textRow7 = ["","","","","","",""]
//---
var currentPlyer = true
var PlyerWin =false
var hard = false
var rowFull = [false,false,false,false,false,false,false]
var numRow = [1,2,3,4,5,6,7]
printDifficultyAi()

function printDifficultyAi(){
    if(!hard){
        document.getElementById("dpAI").innerHTML = "|| מצב המשחקר הוא קל"
    }else{
        document.getElementById("dpAI").innerHTML = "|| מצב המשחקר הוא קשה"

    }
}

function printId(id){
    if(currentPlyer){
        document.getElementById(`${id}`).style = "background-color: rgb(13, 128, 0);"
    }else{ 
        document.getElementById(`${id}`).style = "background-color: red;"
    }
}

function printWiner(id){
    document.getElementById(`${id}`).style = "background-color: wheat;"
}

function Flip(){
    if(currentPlyer){
        printTextUser("התור של השחקן האדום")
        currentPlyer = false
        myAI()
    }else{
        printTextUser("התור של השחקן הירוק")
        currentPlyer = true
    }
}

function winer(){
    if(!PlyerWin){
        printInArrayWioner(textRow1,idRow1)
        printInArrayWioner(textRow2,idRow2)
        printInArrayWioner(textRow3,idRow3)
        printInArrayWioner(textRow4,idRow4)
        printInArrayWioner(textRow5,idRow5)
        printInArrayWioner(textRow6,idRow6)
        printInArrayWioner(textRow7,idRow7)
    
        checks2(textRow1,textRow2,textRow3,textRow4, idRow1,idRow2,idRow3,idRow4)
        checks2(textRow2,textRow3,textRow4,textRow5,idRow2,idRow3,idRow4,idRow5)
        checks2(textRow3,textRow4,textRow5,textRow6,idRow3,idRow4,idRow5,idRow6)
        checks2(textRow4,textRow5,textRow6,textRow7,idRow4,idRow5,idRow6,idRow7)
    
        checks3(textRow1,textRow2,textRow3,textRow4,idRow1,idRow2,idRow3,idRow4)
    
        checks3(textRow2,textRow3,textRow4,textRow5,idRow2,idRow3,idRow4,idRow5)
        checks3(textRow3,textRow4,textRow5,textRow6,idRow3,idRow4,idRow5,idRow6)
        checks3(textRow4,textRow5,textRow6,textRow7,idRow4,idRow5,idRow6,idRow7)
        checks3(textRow7,textRow6,textRow5,textRow4,idRow7,idRow6,idRow5,idRow4)
        checks3(textRow6,textRow5,textRow4,textRow3,idRow6,idRow5,idRow4,idRow3)
        checks3(textRow5,textRow4,textRow3,textRow2,idRow5,idRow4,idRow3,idRow2)
    
     checks3(textRow4,textRow3,textRow2,textRow1,idRow4,idRow3,idRow2,idRow1)
    
    }
   


}


function refreshBoks(arry){
    for(var i =0;i<arry.length;i++){
        document.getElementById(`${arry[i]}`).style = ""
    }
}


function reset(){
        refreshBoks(idRow1)
        refreshBoks(idRow2)
        refreshBoks(idRow3)
        refreshBoks(idRow4)
        refreshBoks(idRow5)
        refreshBoks(idRow6)
        refreshBoks(idRow7)
        printTextUser("התור של השחקן הירוק")
    
     textRow1 = ["","","","","","",""]
    countRow1 = 0 
    //----
     textRow2 = ["","","","","","",""]
     countRow2 = 0 
    //----
     textRow3 = ["","","","","","",""]
     countRow3 = 0 
    //---
     textRow4 = ["","","","","","",""]
     countRow4 = 0 
    //---
     countRow5 = 0 
     textRow5 = ["","","","","","",""]
    //--
     textRow6 = ["","","","","","",""]
     countRow6 = 0 
    //----
     countRow7 = 0 
     textRow7 = ["","","","","","",""]
    //---
     currentPlyer = true
     PlyerWin =false
    
    
}

function printTextUser(str){
    document.getElementById("textUser").innerHTML = str
}

function refresh(){
    document.getElementById("error").innerHTML = ""
}

function printError(){
    document.getElementById("error").innerHTML = "השורה כבר מלאה"
}

function row1(){
    if(!PlyerWin){
        if(countRow1 < idRow1.length){
            printId(idRow1[countRow1])
            if(currentPlyer){
                textRow1[countRow1] = "G"
            }else{
                textRow1[countRow1] = "R"
            }
            countRow1++
            if(countRow1 == idRow1.length){
                rowFull[0] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}

function row2(){
    if(!PlyerWin){
        if(countRow2 < idRow2.length){
            printId(idRow2[countRow2])
            if(currentPlyer){
                textRow2[countRow2] = "G"
            }else{
                textRow2[countRow2] = "R"
            }
            countRow2++
            if(countRow2 == idRow2.length){
                rowFull[1] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}

function row3(){
    if(!PlyerWin){
        if(countRow3 < idRow3.length){
            printId(idRow3[countRow3])
            if(currentPlyer){
                textRow3[countRow3] = "G"
            }else{
                textRow3[countRow3] = "R"
            }
            countRow3++
            if(countRow3 == idRow3.length){
                rowFull[2] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}


function row4(){
    if(!PlyerWin){
        if(countRow4 < idRow4.length){
            printId(idRow4[countRow4])
            if(currentPlyer){
                textRow4[countRow4] = "G"
            }else{
                textRow4[countRow4] = "R"
            }
            countRow4++
            if(countRow4 == idRow4.length){
                rowFull[3] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}

function row5(){
    if(!PlyerWin){
        if(countRow5 < idRow5.length){
            printId(idRow5[countRow5])
            if(currentPlyer){
                textRow5[countRow5] = "G"
            }else{
                textRow5[countRow5] = "R"
            }
            countRow5++
            if(countRow5 == idRow5.length){
                rowFull[4] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}


function row6(){
    if(!PlyerWin){
        if(countRow6 < idRow6.length){
            printId(idRow6[countRow6])
            if(currentPlyer){
                textRow6[countRow6] = "G"
            }else{
                textRow6[countRow6] = "R"
            }
            countRow6++
            if(countRow6 == idRow6.length){
                rowFull[5] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}


function row7(){
    if(!PlyerWin){
        if(countRow7 < idRow7.length){
            printId(idRow7[countRow7])
            if(currentPlyer){
                textRow7[countRow7] = "G"
            }else{
                textRow7[countRow7] = "R"
            }
            countRow7++
            if(countRow7 == idRow7.length){
                rowFull[6] = true
            }
            Flip()
            refresh()
            winer()
        }else{
            printError()
        }
    }
}

function checks2(arry1,arry2,arry3,arry4,myArray1,myArray2,myArray3,myArray4){
    for(var i = 0;i<arry1.length;i++){
        if(arry1[i] == arry2[i] && arry2[i] == arry3[i] &&arry3[i] == arry4[i] && arry1[i]!=""){
            if(arry1[i] == "G"){
                PlyerWin = true
                printWiner(myArray1[i])
                printWiner(myArray2[i])
                printWiner(myArray3[i])
                printWiner(myArray4[i])

                printTextUser("השחק הירוק נצח")
            }
            else if(arry1[i] == "R"){
                PlyerWin = true
                printWiner(myArray1[i])
                printWiner(myArray2[i])
                printWiner(myArray3[i])
                printWiner(myArray4[i])
                printTextUser("השחק האדום נצח")
            }
        }
    }
}

function checks3(arry1,arry2,arry3,arry4,myArray1,myArray2,myArray3,myArray4){
    for(var i=0;i < arry1.length;i++){
        if(i <=3){
            if(arry1[i] == arry2[i+1] && arry2[i+1] == arry3[i+2] &&arry3[i+2] == arry4[i+3] && arry1[i]!=""){
                if(arry1[i] == "G" && arry2[i] == "G"){
                    PlyerWin = true
                    printWiner(myArray1[i])
                    printWiner(myArray2[i+1])
                    printWiner(myArray3[i+2])
                    printWiner(myArray4[i+3])
                    printTextUser("השחק הירוק נצח")
                }
                else if(arry1[i] == "R" && arry2[i] == "G"){
                    PlyerWin = true
                    printWiner(myArray1[i])
                    printWiner(myArray2[i+1])
                    printWiner(myArray3[i+2])
                    printWiner(myArray4[i+3])
                    printTextUser("השחק האדום נצח")
                }
            }
        }else{
            break
        }
    }
}

function printInArrayWioner(arry,myArray){
    for(var i =0;i<arry.length;i++){
        if(i <=3){
            if(arry[i] == arry[i+1] && arry[i+1] == arry[i+2] && arry[i+2] == arry[i+3] && arry[0] !=""){
             
                if(arry[i] == "G"){
                    PlyerWin = true
                    console.log(myArray[i])
                    printWiner(myArray[i])
                    printWiner(myArray[i+1])
                    printWiner(myArray[i+2])
                    printWiner(myArray[i+3])
                    printTextUser("השחק הירוק נצח")
        
                }
                else if(arry[i] == "R"){
                    PlyerWin = true
                    printWiner(myArray[i])
                    printWiner(myArray[i+1])
                    printWiner(myArray[i+2])
                    printWiner(myArray[i+3])
                    printTextUser("השחק האדום נצח")
                }
            }
        }else{
            break
        }
    }    
}

function Difficulty(myInput){
    hard = myInput
    printDifficultyAi()
}

function myAI(){
    if(!hard){
        easyGame();
    }else{
        hardGame();
    }
}


function checksAI1ColPleyr(arry){
    for(var i=0;i<arry.length;i++){
        if(i <=3){
            if(arry[i] == arry[i+1] && arry[i+1] == arry[i+2] &&  arry[0] !=""){
                if(arry[i+3] == ""){
                    if(arry[i] == "G" || arry[i] == "R"){
                        return true 
                    }
                }  
            }
        }else{
            break
        }
    }
    return false;
}


function checksAI1ColPleyr2(arry1,arry2,arry3){
    for(var i = 0;i<arry1.length;i++){
        if(arry1[i] == arry2[i] && arry2[i] == arry3[i] && arry1[i]!=""){
            if(arry1[i] == "G" || arry1[i] == "R"){
                return true
            }
        }
    }
    return false;
}

function newArrayRowFull(myArray){
    var newMyArray = new Array(0);
    for(var  i=0;i<myArray.length;i++){
        if(!rowFull[i]){
            newMyArray.push(myArray[i])
        }
    }
    return newMyArray;
}



function moveAIyesFull(myNum){
   var newNumber =  myNum
   
    if(rowFull[0]){
        newNumber = 2
    }
    if(rowFull[2]){
        newNumber = 3
    }
    if(rowFull[3]){
        newNumber = 4
    }
    if(rowFull[3]){
        newNumber = 5
    }
    if(rowFull[4]){
        newNumber = 6
    }
    if(rowFull[5]){
        newNumber = 7
    }

    if(rowFull[6]){
        newNumber = 6
        if(rowFull[5]){
            newNumber = 5
        }
        if(rowFull[4]){
            newNumber = 4
        }
        if(rowFull[3]){
            newNumber = 3
        }
        if(rowFull[2]){
            newNumber = 2
        }
        if(rowFull[1]){
            newNumber = 1
        }
    }
    return newNumber;

}
function checksAI1NoRowFull(RndomNumber){
    for(var i = 0;i<rowFull.length;i++){
        if(i != rowFull.length){
            if(rowFull[i]){
                numRow = newArrayRowFull(numRow)    
                for(var i ;i<numRow.length;i++){
                    RndomNumber = numRow[i]
                    break
                }
            }
        }else {
            numRow = newArrayRowFull(numRow)    
            RndomNumber--

        }
    }
    if(RndomNumber == 8){
        RndomNumber = 7
    }
    return RndomNumber
}

function hardGame(){
    var RndomNumber = Math.floor(Math.random() * 7)+1
    if(RndomNumber == 0){
        RndomNumber = 1
    }
    if(RndomNumber == 8){
        RndomNumber = 7
    }

    if(checksAI1ColPleyr(textRow1)){
        RndomNumber = 1
    }
    if(checksAI1ColPleyr(textRow2) ){
        RndomNumber = 2
    }
    if(checksAI1ColPleyr(textRow3)  ){
        RndomNumber = 3
    }
    if(checksAI1ColPleyr(textRow4)){
        RndomNumber = 4
    }
    if(checksAI1ColPleyr(textRow5)  ){
        RndomNumber = 5
    }
    if(checksAI1ColPleyr(textRow6) ){
        RndomNumber = 6
    }
    if(checksAI1ColPleyr(textRow7)){
        RndomNumber = 7
    }



    RndomNumber = checksAI1NoRowFull(RndomNumber)    
    RndomNumber = moveAIyesFull(RndomNumber)


    console.log(RndomNumber)
    switch(RndomNumber){
    case 0:
        row1();
    break;
    case 1:
        row1();
    break;
    case 2:
        row2();
    break;
    case 3:
        row3();
    break;
    case 4:
        row4();
    break;
    case 5:
        row5();
    break;
    case 6:
        row6();
    break;
    case 7:
        row7();
    break;
    }
}


function easyGame(){
    var RndomNumber = Math.floor(Math.random() * 7)+1
        if(RndomNumber == 0){
            RndomNumber = 1
        }
        if(RndomNumber == 8){
            RndomNumber = 7
        }
  
    RndomNumber = moveAIyesFull(RndomNumber);
    console.log(RndomNumber)
    switch(RndomNumber){
        case 0:
            row1();
        break;
        case 1:
            row1();
        break;
        case 2:
            row2();
        break;
        case 3:
            row3();
        break;
        case 4:
            row4();
        break;
        case 5:
            row5();
        break;
        case 6:
            row6();
        break;
        case 7:
            row7();
        break;
    }


}