const Numbers=[10,20,90,40]
console.log(...Numbers); // akhne 3 dot deoa manhe numbers array tekeh element gulu bher kore anah


// ... spread Operator use koreh numbers array tekeh max element tah bher koreh nilam,
const max=Math.max(...Numbers)
console.log(max);

// sperad Operator use koreh aktah aktah array keh ark tah array teh copy koralm
const numbers2=[...Numbers,100]
console.log(numbers2);