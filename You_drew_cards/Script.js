var cardas = [
    `<img src="imgSrc/Car1.png" style="background-color: black;">`,
    `<img src="imgSrc/Car2.png" style="background-color: black;">`,
    `<img src="imgSrc/Car3.png" style="background-color: black;">`,
    `<img src="imgSrc/Car4.png" style="background-color: black;">`,
    `<img src="imgSrc/Car5.png" style="background-color: black;">`,
    `<img src="imgSrc/Car6.png" style="background-color: black;">`,
    `<img src="imgSrc/Car7.png" style="background-color: black;">`,
    `<img src="imgSrc/Car8.png" style="background-color: black;">`,
    `<img src="imgSrc/Car9.png" style="background-color: black;">`,
    `<img src="imgSrc/Car10.png" style="background-color: black;">`,
    `<img src="imgSrc/Car11.png" style="background-color: black;">`,
    `<img src="imgSrc/Car12.png" style="background-color: black;">`,
    `<img src="imgSrc/Car13.png" style="background-color: black;">`,
    `<img src="imgSrc/Car14.png" style="background-color: black;">`,
    `<img src="imgSrc/Car15.png" style="background-color: black;">`,
    `<img src="imgSrc/Car16.png" style="background-color: black;">`,
    `<img src="imgSrc/Car17.png" style="background-color: black;">`,
    `<img src="imgSrc/Car18.png" style="background-color: black;">`,
    `<img src="imgSrc/Car19.png">`,
    `<img src="imgSrc/Car20.png">`,
    `<img src="imgSrc/Car21.png">`,
]

var noClock = false
var scorMony = 0
var scorFly = 0 




function start(){
        var panel = document.getElementById("panel");
        var end = document.getElementById("end")
        end.innerHTML = ""
        panel.innerHTML = "";
        noClock = false;

        var Bu1= Math.floor(Math.random() * cardas.length)
        var Bu2 = Math.floor(Math.random() * cardas.length)
        var Bu3 = Math.floor(Math.random() * cardas.length)
        while(Bu1 == Bu2){
            Bu2 = Math.floor(Math.random() * cardas.length)
            if(Bu2 != Bu1){
                break
            }
        }
        while(Bu1 == Bu3){
            Bu3 = Math.floor(Math.random() * cardas.length)
            if(Bu3 != Bu1){
                break
            }
        }
    
        while(Bu2 == Bu3){
            Bu3 = Math.floor(Math.random() * cardas.length)
            if(Bu3 != Bu2 && Bu3 != Bu1){
                break
            }
        }
        var numRndom =  Math.floor(Math.random() * 16)
        var num1 = 0;
        var num2 = 0;
        var num3 = 0; 
    
        switch(numRndom){
            case 0:
                num1 = 1;
            break;
            case 1:
                num3 = 1;
            break;
            case 2:
                num2 = 1;
            break;
            case 3:
                num1 = 1;
            break;
            case 4:
                num3 = 1;
            break;
            case 5:
                num2 = 1;
            break; 
             case 6:
                num1 = 1;
            break;
            case 7:
                num3 = 1;
            break;
            case 8:
                num2 = 1;
            break;
            case 9:
                num1 = 1;
            break;
            case 10:
                num2 = 1;
            break;
            case 11:
                num1 = 1;
            break;
            case 12:
                num2 = 1;
            break;
            case 13:
                num1 = 1;
            break;
            case 14:
                num3 = 1;
            break;
            case 15:
                num2 = 1;
            break;
        }
        panel.innerHTML +=  `<button onclick="Op(${num1}) ">${cardas[Bu1]}</button> `
        panel.innerHTML +=  `<button onclick="Op(${num2})" >${cardas[Bu2]}</button> `
        panel.innerHTML +=  `<button onclick="Op(${num3})">${cardas[Bu3]}</button> `
    
}



function Op(number){
    if(!noClock){
        var end = document.getElementById("end")
        var mony  =document.getElementById("mony")
        var fly = document.getElementById("fly")
        if(number == 0){
            end.innerHTML = `<img src="imgSrc/fly.png">`
            scorFly++
            fly.innerHTML = `${scorFly} מספר הזבובים שיש לך הוא `
    
        }else if(number == 1){
            end.innerHTML = `<img src="imgSrc/mony.png">`
            scorMony++
            mony.innerHTML = `${scorMony} מספר הכסף שיש לך הוא `
        }
        noClock = true
    }else{
        document.getElementById("textForUser").innerHTML = "לחצת כבר על הכפתור"
    }
  

  
}
