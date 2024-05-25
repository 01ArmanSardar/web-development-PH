// Normal Function
function add(num, num2) {
   return num + num2
}

// functions expression
const sum = function add(num, num2)
{
   return num + num2
}

// Function expressionn (anonymus)
const sum2 = function (num, num2)
{
   return num + num2
}

// arrow Function, simple arrow function a bydefault return hoie jai
const sum3 = (num,num2) => num + num2

// big arrow fucntion er belai { er modeh impliment gulu korteh hoi } abong return korteh hoi 
const BigarroFunction= (num,num3)=>{
     
 const sum=num+num3
   const minus=sum-num
   const multiply=minus*2
   const finalOutput=multiply+2
   return finalOutput
}

const result1=  add(15,15)
const result2= sum(15,15)
const result3= sum2(15,15)
const result4= sum3(15,15)
const result5=BigarroFunction(100,200)


console.log(result1,result2,result3,result4,result5);
