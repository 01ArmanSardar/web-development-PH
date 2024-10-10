const money=190

if (money<=100){
    console.log('burger');
}
else
{
    console.log('big burger');
}
// 1. Ternary Operator
const food=money<=100?'burgerT':'Big burgerT'; // uporer 7 tah line keh amrah ak line a likhe pellam ternary Operator USe koreh
console.log(food);

//Another Example of ternaryOpertor
isActive=true
const showuser=()=>console.log('displayUser');
const hideUser=()=>console.log('HideUSer');
isActive?showuser():hideUser()

// 2. Number to string Convrt shortcut
const num=23
const Numstr=num+''
console.log(num);
console.log(Numstr);
//3. string to Number shortcut
const str='45'
console.log(str);
const strNum=+str
console.log(strNum); 
