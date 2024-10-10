// 1. json ,Stringfy,parse
const Student = {
    name: 'arman',
    age: 45,
    hobbby: 'gardening'
}

const StudentJson = JSON.stringify(Student) // the way of convert object to json
const StudentObject = JSON.parse(StudentJson) // the way of convert json to Object
console.log(StudentObject);
console.log(StudentJson);

// 2. fetch,key,values
fetch("ExampleUrl")
    .then(res => res.json)
    .then(data => console.log(data));

const keyss= Object.keys(Student) // kono object er shobGulu key pawar upai
const Values=Object.values(Student) //kono object er shobgulu value pawar upai
console.log(keyss);
console.log(Values);