import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../Pages/AuthPage/LoginPage/Login'
import { Register } from '../Pages/AuthPage/RegisterPage/Register'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage'
import { WelcomePage } from '../Pages/WelcomePage/WelcomePage'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>   
            <Route path ="/login" element = {<Login/>}/>
            <Route path ="/register" element = {<Register/>}/>
            <Route path = "/" element = {<WelcomePage/>}/>
            <Route path ="/dashboard/*" element = {<DashboardRouter/>}/>
            <Route path = "/*" element = {<NotFoundPage/>}/>
        </Routes>   
    </BrowserRouter>
)
    
}
