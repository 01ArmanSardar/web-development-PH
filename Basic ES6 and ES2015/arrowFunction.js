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

// arrow Function
const sum3 = (num,num2) => num + num2

const result1=  add(15,15)
const result2= sum(15,15)
const result3= sum2(15,15)
const result4= sum3(15,15)


console.log(result1,result2,result3,result4);
