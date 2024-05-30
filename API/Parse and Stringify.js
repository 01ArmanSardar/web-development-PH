const DummyObject = {
    name: 'arman', roll: '10', adress: 'dhaka', hobbyList: ['football,criket,tenis'],
    isSmoke: false
}

const ConvertInString=JSON.stringify(DummyObject)

console.log(ConvertInString);
const AgainConvertObject=JSON.parse(ConvertInString)
console.log(AgainConvertObject);