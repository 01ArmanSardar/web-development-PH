// export default function Todo({task}){
// return(
// <li> <strong>your task is</strong>  {task} </li>
// )
// }

//......................................................................
// Conditional Renderign way 1
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return (

//             <li> <strong>your task is Finished</strong>  {task}  </li>

//         )
//     }
//     else{
//         return(
//             <li> your task is NOYT finished</li>
//         )
//     }
// }

//......................................................................
// Conditional Rendering way 2
// export default function Todo({ task, isDone }){
//     if (isDone) {
//         return (<li>your task is finished {task}</li>)
//     }
//     return (
//         <li>your task is not finished</li>
//     )

// }

//......................................................................
//Conditional Rendering part 3 : ternary Operator
// export default function Todo({task,isDone}){
//     return(
//         <li> {isDone?'finished':'Work On'} {task} </li>
//     )
// }
//..................................................................................
//Conditional Rendering part 4: &&
// export default function Todo({task,isDone}){
//     return(
// <li>{task} {isDone && ':Done'}</li>
//     )
// }

//..................................................................................
//Conditional Rendering part 5: ||
// export default function Todo({ task, isDone }){
//     return (
//         <li>{task} {isDone || ':Do iT'}</li>
//     )
// }


//..................................................................................
//Conditional Rendering part 6:
export default function Todo({task,isDone}) {
    let listItem;
    if (isDone) {
        listItem = <li>finish {task}</li>

    }
    else {
        listItem = <li>work on {task}</li>
    }
    return listItem
}