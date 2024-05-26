//

const friends = ['arman', 'shakib', 'rakib', 'labib', 'sabbir Rahman']

const friends_name_length = friends.map(name => name.length)

console.log(friends_name_length);


// 
const products = [
    { Pnanme: 'apple', price: '200', quantity: '20', id: '9' },
    { Pnanme: 'mango', price: '300', quantity: '80', id: '4' },
    { Pnanme: 'banana', price: '290', quantity: '90', id: '49' },
    { Pnanme: 'strawbery', price: '230', quantity: '90', id: '39' },
    { Pnanme: 'dragon', price: '290', quantity: '2', id: '93' }
]

const ProductName=products.map(prodcut=>prodcut.Pnanme)
console.log(ProductName);