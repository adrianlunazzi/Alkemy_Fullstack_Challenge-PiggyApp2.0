import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Navigation } from '../components/Navbar/Navigation'
import { OperationPage } from '../Pages/OperationPage/OperationPage'
import { DashboardPage} from '../Pages/DashboardPage/DashboardPage'
import { NewOperation } from '../components/Operations/NewOperationForm/NewOperation'
import { OperationDetail } from '../components/Operations/OperationDetail/OperationDetail'

export const DashboardRouter = () => {
    return (
        <>
        <Navigation/>
        <Routes>
            <Route path ="/" element = {<DashboardPage/>}/>
            <Route path ="/operation" element = {<OperationPage/>}/>
            <Route path ="/newoperation" element = {<NewOperation/>}/>
            <Route path="/operation/:id" element={<OperationDetail/>} />

        </Routes>
        </>
    )
}
