import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import FRegister from './pages/Register/FRegister'
import SRegister from './pages/Register/SRegister'
import TRegister from './pages/Register/TRegister'
import ClassRegister from './pages/ClassRegister/ClassRegister'
import Layout from './pages/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
const App = () => {

  return (
    <>
    <Routes>
      <Route path = '/' element = {<Homepage />}/>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/fregister' element = {<FRegister />}/>
      <Route path = '/sregister' element = {<SRegister />}/>
      <Route path = '/tregister' element = {<TRegister />}/>
      <Route path = '/dashboard' element = {<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path='dang-ky-lop' element = {<ClassRegister />}/>
      </Route>  
    </Routes>
    </>
  ) 

}

export default App