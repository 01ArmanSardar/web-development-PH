const dummmy = {
    name: 'arman', age: 20, address: 'chandpur', phone: '01859136957', hobby: 'footBall'

}
//normall process
const namee = dummmy.name
const address = dummmy.address

//Distrcuting Process
const { name, age } = dummmy

console.log(age);


const dummy2 = {
    name: 'arman', age: 20, address: 'chandpur', phone: '01859136957',
    hobby: { first_hobby: 'football', second_hobby: 'cricket', third_hobby: 'gaming' }
}

const {first_hobby}=dummy2.hobby

console.log(first_hobby);