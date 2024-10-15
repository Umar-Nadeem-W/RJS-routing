import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Homepage(){
    const [username, setUsername] = useState("")
    const navigate = useNavigate();//Using useNavigate 
    function handleClick(){
        navigate("/dashboard/profile", {state:{username}}); // we can also send a state to the specified path 
    }
    return <div>
        
        <h3>This is the homepage</h3>
        <input type="text" value={username} placeholder="Enter you name" onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={handleClick}>Go to profile page  </button>

    </div>
}