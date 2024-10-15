import {Link} from 'react-router-dom'
import Homepage from '../pages/Homepage'

export default function Nav(){
    return <div>
        <Link to="/" >Homepage</Link>
        <Link to="/dashboard" >Dashboard</Link>
    </div>
}