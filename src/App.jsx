import React from 'react'
import './App.css'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderConponent from './component/HeaderConponent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './component/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderConponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}>
          </Route>
          <Route path='/employees' element={<ListEmployeeComponent />}>
          </Route>
          <Route path='/add-employee' element={<EmployeeComponent />}>
          </Route>
          <Route path='/update-employee/:id' element={<EmployeeComponent />}>
          </Route>
          <Route path='/delete-employee/:id' element={<ListEmployeeComponent />}>
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
