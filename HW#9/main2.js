console.log("Part 2");
let aa = Array();
for (let i = 0; i <= 9; i++) {
     aa[i] = parseFloat((Math.random() * 50).toFixed(2));
}
let str = '';
for (let i = 0; i <= 9; i++) {
    str += aa[i] + ' ';
}
document.getElementById('result_1_1').innerHTML = str;
let sum = 0;
let n = 0;
for (let i = 0; i < aa.length; i++) {
    sum += aa[i];
    n += 1;
}
let avg = sum / n;
document.getElementById('result_1_2').innerHTML = avg;

let dd = Array();
let sum_2=0;
let str_2 =" ";
pp=prompt("Введите кол-во букв (для зад 2)");
for (let i = 0; i < pp; i++) {
    dd[i] = prompt("Введите " + (i+1) + "-ую букву");
    str_2 += dd[i] + " ";
    if(dd[i]=="a" || dd[i]=="а"){ 
        sum_2+=1;
    }
}
document.getElementById('result_2_1').innerHTML = str_2;
document.getElementById('result_2_2').innerHTML = sum_2;

let xx = Array();
let str_3 = '';
let sum_31=0;
let sum_32=0;
let result;

for (let i = 0; i < 10; i++) {
    xx[i] = Math.floor(Math.random() * 2);
    if(xx[i]==0){
        xx[i]="Ложь";
        sum_31+=1;
    }
    else{
        xx[i]="Истина";
        sum_32+=1;
    }
    str_3 += xx[i] + ' ';
}

document.getElementById('result_3_1').innerHTML = str_3;
document.getElementById('result_3_2').innerHTML = sum_31;
document.getElementById('result_3_3').innerHTML = sum_32;
if(sum_31>sum_32){
    result="Больше значений 'Ложь'";
}
else if(sum_31<sum_32){
    result="Больше значений 'Истина'";
}
else{
    result="Количество значений 'Истина' и 'Ложь' равное";
}
document.getElementById('result_3_4').innerHTML = result;
