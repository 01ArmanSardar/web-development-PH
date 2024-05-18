const Products = [
    'laPtop is very helFUl',
    'sPorts is good for health',
    'this iS a GOod Day',
    'laptop is good for us'
]


// const Searching = 'laptop'

// const output = []

// for (const Product of Products) {
//     if (Product.toLowerCase().indexOf(Searching.toLowerCase()) != -1) {
//         output.push(Product)
//     }
// }
// // console.log(output);


// const Searching2 = 'is'

// const output2 = []

// for (const Product of Products) {
//     if (Product.toLowerCase().includes(Searching2.toLowerCase()) != -1) {
//         output2.push(Product)
//     }
// }
// // console.log(output2);


const Searching3 = 'sports'

const output3 = []

for (const Product of Products) {
    if (Product.toLowerCase().includes(Searching3.toLowerCase())) {
        output3.push(Product)
    }
}
console.log(output3);
