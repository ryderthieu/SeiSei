import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
const App = () => {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<Homepage />}/>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/register' element = {<Register />}/>
    </Routes>
    </>
  ) 

}

export default App