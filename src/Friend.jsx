export default function Friend({friend}){
    let {name,email} = friend

    return(
        <div className="box">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {
                console.log("Dfjksdfh")
            }
        </div>
    )
}