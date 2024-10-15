import { Outlet , Link} from "react-router-dom";

export default function Dashboard(){

    return <div>
        <h3>This is the dashboard</h3>
        <ul>
            <li>
                <Link to='settings'>Settings</Link>
                <Link to='profile'>Profile</Link>
            </li>
        </ul>
        
        <Outlet/>  {/* Outlet Must be included for the nested route to work  */}
    
    </div>
}
