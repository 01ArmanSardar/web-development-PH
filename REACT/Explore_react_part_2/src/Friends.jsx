import { useEffect, useState } from "react"
export default function Friends() {
    const [friends, setFriends] = useState([]) // akhne useState([]) a aktah empty array deor karon holo amrah api tekeh je data gulu load korbho seh data gulu array format a ache manhe aktah array er moddei aceh,tai default value hisebhe aktah empty array dilam, Akhne fetch korah data gulu jodi kono object er moddeh taktoh tahole default hiesehbhe aktha empty { } object ditam,
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return <div>

        <h3>friends{friends.length}</h3>
        {friends.map(friend => <Friend friend={friend}></Friend>)}

    </div>
}

function Friend( {friend} ) {
    const { name, email } = friend
    console.log(friend);
    return <div>
        <h3>name: {name}</h3>
        <h3>email:{email}</h3>

    </div>
}