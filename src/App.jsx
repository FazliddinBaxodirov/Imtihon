import { useContext } from 'react'
import './App.css'
import { Context } from './Context/Context'
import Dashboard from './CustomRoutes/Dashboard'
import Login from './CustomRoutes/Login/Index'

function App() {
  const {token} = useContext(Context)
  return token ? <Dashboard/> : <Login/>
}

export default App