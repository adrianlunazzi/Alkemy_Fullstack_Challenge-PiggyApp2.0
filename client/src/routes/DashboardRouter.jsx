import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Navigation } from '../components/Navbar/Navigation'
import { OperationPage } from '../Pages/OperationPage/OperationPage'
import { DashboardPage} from '../Pages/DashboardPage/DashboardPage'

export const DashboardRouter = () => {
    return (
        <>
        <Navigation/>
        <Routes>
            <Route path ="/dashboard" element = {<DashboardPage/>}/>
            <Route path ="/operation" element = {<OperationPage/>}/>

        </Routes>
        </>
    )
}
