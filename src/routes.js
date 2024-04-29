import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Items from './pages/Items'

//Home


export default function Pages(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/login' />
                <Route element={<Signup />} path='/signup' />
                <Route element={<Home />} path='/' />
                <Route element={<Items />} path='/items' />
            </Routes>
        </BrowserRouter>
    )
}