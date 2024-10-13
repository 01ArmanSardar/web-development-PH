import { useState } from "react"

export default function () {
    const [team, TeamState] = useState(11)
    
    function addEvent() {
        const newTeam = team + 1
        TeamState(newTeam)
    }

    const removeEvent= ()=>{
TeamState(team-1)
    }
    const TeamStyle = {
        border: "2px solid purple",
        borderRadius: '15px',
        padding: '15px',
        margin: 'auto',
        width:'50%'
    }
    return (<div style={TeamStyle}>
        <h3>player :{team}</h3>
        <button onClick={addEvent}>add Player</button>
        <button onClick={removeEvent}>Remove Player</button>

    </div>)
}