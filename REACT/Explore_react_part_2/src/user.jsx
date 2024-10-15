import { useEffect, useState } from "react"
export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const UserStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        marginBottom: '5px',
        marginLeft: '300px',
        width: '30%'
    }
    return (<div style={UserStyle}>

        <h3>users: {users.length}</h3>
    </div>)
}

/*
1.declare a state to hold the data
2.useEffect with call back and dependency array
3. use fetc to load data
*/ 