import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const countAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    
    /*
    Uporer 4 tah line Nicher function er motoe kaj korteche,manhe uporer function er kind of behind the scence bolah jai ar kih,refarence ph milstone 7 module 39.3
    function useState(num){
        function updateName(value){
            num=value;
        }
        return [num,updateName]
    }
    const [count,setCount]=useState(0)*/

    const addStyle={
        border:'2px solid yellow',
        width:'50%',
        marginBottom:'5px',
        marginLeft:'250px',
        borderRadius:'10px'
        
    }
    return (
        <div style={addStyle}>
            <h3>Counter:{count}
            </h3>
            <button onClick={countAdd}>addCount</button>
        </div>
    )
}