import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../Pages/AuthPage/LoginPage/Login'
import { Register } from '../Pages/AuthPage/RegisterPage/Register'
import { NotFoundPage } from '../Pages/NotFound/NotFoundPage'
import { WelcomePage } from '../Pages/WelcomePage/WelcomePage'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'


export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>   
            <Route path ="/login" element = {
            <PublicRoutes>
            <Login/>
            </PublicRoutes>
            }/>
            <Route path ="/register" element = {
            <PublicRoutes>
            <Register/>
            </PublicRoutes>
            }/>
            <Route path = "/" element = {
            <PublicRoutes>
            <WelcomePage/>
            </PublicRoutes>
            }/>
            <Route path ="/dashboard/*" element = {
                <PrivateRoutes>
                    <DashboardRouter/>
                </PrivateRoutes>
            }/>
            <Route path = "/*" element = {<NotFoundPage/>}/>
        </Routes>   
    </BrowserRouter>
)
    
}
