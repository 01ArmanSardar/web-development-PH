const Numbers=[10,20,30,40,50]
const output=[]
function doubleit(num)
{
  return num*2 
}

for (const number of Numbers)
    {
      const multifly =doubleit(number)
      output.push(multifly)
    }

console.log(output);



//uporer ai kaj tai amrah cailei array.map use koreh 1 line kore pelteh parih

//internal step of array.map
//1.loop through each element
//2.for each element call the provided function
//3.result for each element will be stored in a array

const output2=Numbers.map(doubleit);
console.log(output2);