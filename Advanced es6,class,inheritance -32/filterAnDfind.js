// filter normal array element
const numbers=[10,20,30,50,90,9,40]

const filterBigNumbers=numbers.filter(number=>number>45)

console.log(filterBigNumbers);

// filter in a array of objects
const products = [
    { Pnanme: 'apple', price: '100', quantity: '20', id: '9' },
    { Pnanme: 'mango', price: '300', quantity: '80', id: '4' },
    { Pnanme: 'banana', price: '290', quantity: '90', id: '49' },
    { Pnanme: 'strawbery', price: '230', quantity: '90', id: '39' },
    { Pnanme: 'dragon', price: '190', quantity: '2', id: '93' }
]

const filterExpensiveFood=products.filter(name=>name.price>200)
console.log(filterExpensiveFood);
console.log('ok');

// find
const findMostQuantityProduct=products.find(product=>product.quantity==90)
console.log(findMostQuantityProduct);