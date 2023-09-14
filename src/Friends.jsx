import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function FriendsFunc(){
    let [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(value => setFriends(value))
    },[])

    return(
        <div>
            <h2>Friends: {friends.length}</h2>
            {
            friends.map((fa) => <Friend friend={fa}></Friend>)
            }
        </div>
    )
}