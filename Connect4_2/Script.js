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
var countPrintWiner = 0 

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

function rowFulle(){
    if(countRow1 == textRow1.length && countRow2 == textRow2.length && countRow3 == textRow3.length && 
        countRow4 == textRow4.length && countRow5 == textRow5.length && countRow6 == textRow6.length && countRow7 == textRow7.length){
            document.getElementById("full").innerHTML = "כל השורות כבר מלאות"
        }
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
            Flip()
            refresh()
            winer()
            rowFulle()
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
            Flip()
            refresh()
            winer()
            rowFulle()

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
            Flip()
            refresh()
            winer()
            rowFulle()

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
            Flip()
            refresh()
            winer()
            rowFulle()

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
            Flip()
            refresh()
            winer()
            rowFulle()

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
            Flip()
            refresh()
            winer()
            rowFulle()

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
            Flip()
            refresh()
            winer()
            rowFulle()

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
                if(arry1[i] == "G"){
                    PlyerWin = true
                    printWiner(myArray1[i])
                    printWiner(myArray2[i+1])
                    printWiner(myArray3[i+2])
                    printWiner(myArray4[i+3])
                    printTextUser("השחק הירוק נצח")
                }
                else if(arry1[i] == "R"){
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
                    console.log(myArray[i])
                    printWiner(myArray[i])
                    printWiner(myArray[i+1])
                    printWiner(myArray[i+2])
                    printWiner(myArray[i+3])
                    PlyerWin = true
                  
                    printTextUser("השחק הירוק נצח")
        
                }
                else if(arry[i] == "R"){
                    printWiner(myArray[i])
                    printWiner(myArray[i+1])
                    printWiner(myArray[i+2])
                    printWiner(myArray[i+3])
                    PlyerWin = true
                    printTextUser("השחק האדום נצח")
                }
            }
        }else{
            break
        }
    }    
}