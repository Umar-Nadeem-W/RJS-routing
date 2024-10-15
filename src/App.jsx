import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'
import Notfound from '../pages/Notfound'
import Nav from '../components/Nav'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'
function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>          {/* this is how nested routes are structured */}
        <Route path='settings'element={<Settings/>} />
        <Route path='profile'element={<Profile/>} />
      </Route>

      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App
