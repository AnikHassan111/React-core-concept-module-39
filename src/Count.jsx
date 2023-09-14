import { useState } from "react";

export default function Count(){
    const [team,setTeam] = useState(11)
    const playerStyle = {
        border:"2px solid red",
        padding: "15px",
        margin:"15px",
        borderRadius:"10px"
    }
    const addPlayer = ()=>{
        let newPlayer = team + 1
        setTeam(newPlayer)
    }
    const removePlayer = ()=>{
        let newPlayer = team - 1
        setTeam(newPlayer)
    }
    return(
        <div style={playerStyle}>
            <h2>Player: {team}</h2>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}