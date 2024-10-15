import { useLocation } from "react-router-dom"

export default function Profile(){

    const location = useLocation();
    const {username} = location.state || {} //Incase state isnt passed we need empty brackets


return <div>This is the profile page of {username}</div>
}