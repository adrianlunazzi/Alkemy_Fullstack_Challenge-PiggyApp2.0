import React from 'react'
import {useNavigate}from "react-router-dom"
import {Button}from "react-bootstrap"
import { GoDiffAdded } from "react-icons/go";
import "./dashboard.css"
import { Balance } from '../../components/Balance/Balance';
import { LastOperation } from '../../components/Operations/LastOperation/LastOperation';
import { useSelector } from 'react-redux';

export const DashboardPage = () => {
    const navigate = useNavigate();
    const {isLogged} = useSelector  (state => state.auth)
   
    const handleCreateOperation = ()=>{
    navigate ("/dashboard/newoperation")
}


    return (
        <div className="dashboardContainer">
            <Balance/>
            <div className = "dashboardContent">
                <div className = "columnLeft">
                    <Button onClick = {handleCreateOperation} variant = "success"><GoDiffAdded/> <br/> Registrar Operacion</Button>
                </div>
                <div className = "columnRigth">
                    <LastOperation/>
                </div>
             </div>
        </div>
    )
}
