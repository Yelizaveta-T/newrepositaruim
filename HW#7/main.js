function Result1() {
    let firstValue = +document.querySelector("#a").value;
    let secondValue = +document.querySelector("#b").value;
    let result;
    if (firstValue > secondValue){
       result=firstValue;
    } else if (firstValue == secondValue){
       result="Числа равны";
    } else{
       result=secondValue;
    }
    document.getElementById('result_1').innerHTML = result;
}

function Result2() {
    let firstValue = +document.querySelector("#a2").value;
    let secondValue = +document.querySelector("#b2").value;
    let thirdValue = +document.querySelector("#c2").value;
    let result

    if (firstValue >= secondValue && firstValue>=thirdValue){
       result=firstValue;
    } else if (firstValue == secondValue && firstValue == thirdValue){
        result="Числа равны";
    } else if (secondValue >= firstValue && secondValue >= thirdValue){ 
        result=secondValue
    } else {
        result=thirdValue;
    }
    document.getElementById('result_2').innerHTML = result;
}

function Result3() {
    let firstValue = +document.querySelector("#a3").value;
    let secondValue = +document.querySelector("#b3").value;
    let result
    if (firstValue > 0 && secondValue >0){
       result="Первая четверть";
    } else if (firstValue < 0 && secondValue >0){
        result="Вторая четверть";
    } else if (firstValue < 0 && secondValue < 0){
        result="Третья четверть";
    } else if (firstValue > 0 && secondValue <0){
        result="Четвертая четверть";
    } else if (firstValue == 0 && secondValue ==0){
        result="Точка находится в начале координат"
    } else if (firstValue == 0 && secondValue > 0){
        result="Точка находится на оси У между 1ой и 2ой кординатной плоскостью"
    } else if (firstValue == 0 && secondValue < 0){
        result="Точка находится на оси У между 3ой и 4ой кординатной плоскостью"
    } else if (firstValue > 0 && secondValue == 0){
        result="Точка находится на оси X между 1ой и 4ой кординатной плоскостью"
    } else if (firstValue < 0 && secondValue == 0){
        result="Точка находится на оси X между 2ой и 3ой кординатной плоскостью"
    } 
    document.getElementById('result_3').innerHTML = result;
}

function Result4() {
    let firstValue = +document.querySelector("#a4").value;
    let secondValue = +document.querySelector("#b4").value;
    let result
    if (Number.isInteger(firstValue) && Number.isInteger (secondValue)){
       if (firstValue > secondValue){
        result=firstValue;
       } else if (firstValue < secondValue){
       result=secondValue;
       } else{
        result="0";
       }
    } else{
        result="Не целые";
    }   
    document.getElementById('result_4.a').innerHTML = result;
    document.getElementById('result_4.b').innerHTML = result;
}

function Result5() {
    let firstValue = +document.querySelector("#a5").value;
    let result
    if (Number.isInteger(firstValue)){
       if (firstValue%2==0 ){
           if (firstValue>=10 && firstValue<100){
            result="Число четное и двузначное";
           } else{
             result="Число четное и недвузначное"
           }
        } else if (firstValue>=10 && firstValue<100){
           result="Число нечетное и двузначное";
          } else{
          result="Число нечетное и недвузначное";
          }
    } else{
        result="Не целое число";
      }   
    document.getElementById('result_5').innerHTML = result;
}

function Result6() {
    let firstValue = +document.querySelector("#a6").value;
    let result;
    if (firstValue >0){
       if (firstValue%5==0){
           result="Число положительно и кратно 5";
       } else {
       result="Число положительно, но не кратно 5";
       } 
    } else {
        result="Число отрицательно или равно 0"
    }
    document.getElementById('result_6').innerHTML = result;
}

function Result7() {
    let firstValue = +document.querySelector("#a7").value;
    let result
    if (firstValue%2==0 && firstValue%3==0 ){
           result="Число кратно 2 и 3"
          } else 
              if (firstValue%2==0 && firstValue%5!=0) {
              result="Число кратно 2 и не кратно 5";
            } else 
                if (firstValue>0 && firstValue<3){
                    result="Число пренадлежи интервалу (0;3)"
                }  else if (firstValue>=-2 && firstValue<=0){
                    result="Число принадлежит интервалу [-2;0]"
                } else {
                    result="Число не отвечает условиям";   
                }    
    document.getElementById('result_7').innerHTML = result;
}

function Result8() {
    let firstValue = +document.querySelector("#a8").value;
    let result
    if (Number.isInteger(firstValue)){
    if (firstValue>0){ 
    if (firstValue>=100 && firstValue<1000){
        if (firstValue%10==(firstValue-firstValue%100)/100){
            result="Число является полиндромом";
        } else {
        result="Число не является полиндромом";
        } 
     } else {
         result="Число не трехзначное"
    }
    } else {
        result="Число отрицательное или равно 0"
    } 
    }else{
        result="Введите целое число";
      }   
    document.getElementById('result_8').innerHTML = result;
}

function Result9() {
    let firstValue = +document.querySelector("#a9").value;
    let secondValue = +document.querySelector("#b9").value;
    let result
    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)){
       if (firstValue>=0 && firstValue<=23 && secondValue>=0 && secondValue<=60){
             if (firstValue>=6 && firstValue<=11){
                 result="Доброе утро"
            } else if (firstValue>11 && firstValue<=16){
                result="Добрый день"
               } else if (firstValue>16 && firstValue<=21) {
                   result="Добрый вечер"
               } else{
                   result="Доброй ночи";
               }   
        } else {
            result="Некорректное число"
        } 
        }else {
            result="Число не целое"
        } 
    document.getElementById('result_9').innerHTML = result;
}

function Result10() {
    let firstValue = +document.querySelector("#a10").value;
    let result
    if (Number.isInteger(firstValue)){
       if (firstValue%5==0 ){
            result="Число кратно 5";
           } else {
               result="Число не кратно 5";
           }
    } else {
        result="Не целое число";
      }   
    document.getElementById('result_10').innerHTML = result;
}

function Result11() {
    let firstValue = +document.querySelector("#a11").value;
    let secondValue = +document.querySelector("#b11").value;
    let thirdValue = +document.querySelector("#c11").value;
    let fourthValue = +document.querySelector("#d11").value;
    let result
    if (firstValue>0 && secondValue>0 && thirdValue>0 && fourthValue>0){
     if(firstValue<=fourthValue && secondValue<=fourthValue){
        result='Кирпич пройдет';
    }
     else if (firstValue<=fourthValue && thirdValue<=fourthValue){
        result='Кирпич пройдет';
    }
     else if (secondValue<=fourthValue && thirdValue<=fourthValue){
        result='Кирпич пройдет';
    }
     else if ((firstValue>fourthValue && secondValue>fourthValue) || (firstValue>fourthValue && thirdValue>fourthValue) || (secondValue>fourthValue && thirdValue>fourthValue)){
        result ='Кирпич не пройдет';
    }
    } else {
        result="Число не может быть отрицательным"
    }
    document.getElementById('result_11').innerHTML = result;
}   

function Result12() {
    let firstValue = +document.querySelector("#a12").value;
    let secondValue = +document.querySelector("#b12").value;
    let result
    if (firstValue>0){
       if (firstValue>=secondValue){
                result=firstValue
            } else {
                result=secondValue
            } 
        } else if (firstValue<secondValue){
            result=firstValue
        } else {
            result=secondValue
        }  
    document.getElementById('result_12').innerHTML = result;
}

function Result13() {
    let firstValue = +document.querySelector("#a13").value;
    let secondValue = +document.querySelector("#b13").value;
    let result1;
    let result2
    if (firstValue>secondValue){
            result1=firstValue*secondValue;
            result2=(firstValue+secondValue)/2;
        } else if (secondValue>firstValue) {
                result1=(firstValue+secondValue)/2;
                result2=firstValue*secondValue; 
        } else {
            result1=firstValue;
            result2=secondValue;
        }  
    document.getElementById('result_13.a').innerHTML = result1;
    document.getElementById('result_13.b').innerHTML = result2;
}

function Result14() {
    let firstValue = +document.querySelector("#a14").value;
    let secondValue = +document.querySelector("#b14").value;
    let result
    if (Number.isInteger(firstValue)){
    if (firstValue%2==0){
       if (firstValue>=secondValue){
                result=firstValue
            } else {
                result=secondValue
            } 
        }  else {
            result=(firstValue + secondValue)/2
        }  
    } else {
        result="Не целое число";
      }   
    document.getElementById('result_14').innerHTML = result;
}

function Result15() {
    let firstValue = +document.querySelector("#a15").value;
    let secondValue = +document.querySelector("#b15").value;
    let result1;
    let result2
    if (Number.isInteger(firstValue)){
    if (firstValue>secondValue){
            result1=firstValue%10;
            result2=result1%3;
        } else {
            result1=secondValue%10;
            result2=result1%3;
        }
    } else {
        result1="Одно или оба числа не целые";
        result2="";
    }     
    document.getElementById('result_15.a').innerHTML = result1;
    document.getElementById('result_15.b').innerHTML = result2;
}