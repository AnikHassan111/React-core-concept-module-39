import { useEffect, useState } from "react";

export default function SetDataFormJson(){
    let [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(value => setUsers(value))
    },[])

    return(
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )
}