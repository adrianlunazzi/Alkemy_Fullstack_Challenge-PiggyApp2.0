import React from 'react'
import {useNavigate}from "react-router-dom"
import {Button}from "react-bootstrap"
import { GoDiffAdded } from "react-icons/go";
import "./dashboard.css"
export const DashboardPage = () => {
    const navigate = useNavigate();
    
    const handleCreateOperation = ()=>{
    navigate ("/dashboard/newoperation")
}
    return (
        <div className="dashboardContainer">
            
            <div className = "dashboardContent">
                <div className = "columnLeft">
                    <Button onClick = {handleCreateOperation} variant = "success"><GoDiffAdded/> <br/> Registrar Operacion</Button>
                </div>
                <div className = "columnRigth">
                    
                </div>
             </div>
        </div>
    )
}
