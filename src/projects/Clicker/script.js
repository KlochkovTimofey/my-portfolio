let coin=0;

function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

document.querySelector(".button").onclick=function(){
    coin=coin+1+bonus;
    document.querySelector(".coin").innerHTML=coin;  
}
let bonus=0;
document.querySelector(".button2").onclick=function(){
    if(coin>5){
        bonus=bonus+1;
        coin=coin-5;
        document.querySelector(".bonus").innerHTML=bonus;  
        document.querySelector(".coin").innerHTML=coin;
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".button3").onclick=function(){
    if(coin>50000){
        bonus=bonus*3;
        coin=coin-50000;
        document.querySelector(".bonus").innerHTML=bonus;  
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".button5").onclick=function(){
    if(coin>100000){
        bonus=bonus*5;
        coin=coin-100000;
        document.querySelector(".bonus").innerHTML=bonus;  
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".button6").onclick=function(){
    if(coin>1000000){
        bonus=bonus*10;
        coin=coin-1000000;
        document.querySelector(".bonus").innerHTML=bonus;  
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
let factory=0;
let school=0;
let hospital=0;
let police=0;
let factorySpan=document.querySelector(".factory");
let schoolSpan=document.querySelector(".school");
let hospitalSpan=document.querySelector(".hospital");
let policeSpan=document.querySelector(".police");
let people=0;
let citylevel=0;
let salary=0;
let peopleSpan=document.querySelector(".peoples");
let citylevelSpan=document.querySelector(".citylevels");
let salarySpan=document.querySelector(".salarys")


document.querySelector(".buyfactory").onclick=function(){
    if(coin>10000){ 
        coin=coin-10000;
        factory++;
        people=people*2+100;
        citylevel=citylevel+1;
        salary=Math.floor(salary*1.1+1000);
        factorySpan.innerHTML=factory;  
        peopleSpan.innerHTML=people;
        citylevelSpan.innerHTML=citylevel;
        salarySpan.innerHTML=salary;
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".buyschool").onclick=function(){
    if(coin>10000){ 
        coin=coin-10000;
        school++;
        people=people*2+150;
        citylevel=citylevel+2;
        salary=Math.floor(salary*1.1+5000);
        schoolSpan.innerHTML=school;  
        peopleSpan.innerHTML=people;
        citylevelSpan.innerHTML=citylevel;
        salarySpan.innerHTML=salary;
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".buyhospital").onclick=function(){
    if(coin>10000){ 
        coin=coin-10000;
        hospital++;
        people=people*2+200;
        citylevel=citylevel+1;
        salary=Math.floor(salary*1.1+10000);
        hospitalSpan.innerHTML=hospital;  
        peopleSpan.innerHTML=people;
        citylevelSpan.innerHTML=citylevel;
        salarySpan.innerHTML=salary;
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".buypolice").onclick=function(){
    if(coin>10000){ 
        coin=coin-10000;
        police++;
        people=people*2+150;
        citylevel=citylevel+3;
        salary=Math.floor(salary*1.1+10000);
        policeSpan.innerHTML=police;  
        peopleSpan.innerHTML=people;
        citylevelSpan.innerHTML=citylevel;
        salarySpan.innerHTML=salary;
        document.querySelector(".coin").innerHTML=coin;
        alert("Успешно куплено")
    }
    else{
        alert("У тебя не достаточно монет")
    }
}
document.querySelector(".button4").onclick=function(){
    let userTicket=document.querySelector(".ticket").value;
    let winnerTicket=random(1,100);
    if(coin>1000){
        if(userTicket==winnerTicket){
            coin=coin+100000;
            alert("Поздравляем вы выйграли 100000 монет");
            document.querySelector(".coin").innerHTML=coin;
        }
        else{
            coin=coin-1000;
            document.querySelector(".coin").innerHTML=coin;
            document.querySelector(".win_ticket").innerHTML="Победитель билета: "+winnerTicket;
        
        }

    }
    else{
        alert("У тебя не достаточно монет")
    }
       
}