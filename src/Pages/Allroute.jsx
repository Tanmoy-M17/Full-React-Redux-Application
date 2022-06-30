import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../Components/RequireAuth'
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingelBook from './SingelBook'

export const Allroute = () => {
  return (
    <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/books/:id" element={<SingelBook/>}/>
        <Route path="/books/:id/edit" element={
        <RequireAuth>
        <EditBook/>
        </RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  )
}
