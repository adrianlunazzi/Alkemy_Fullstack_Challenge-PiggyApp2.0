import React from 'react'
import { ListOperation } from '../../components/Operations/ListOperation/ListOperation'

import './operationPage.css'

export const OperationPage = () => {
    return (
        <div className="operationContainer">
            <h3>Mis Operaciones</h3>
            <ListOperation/>
        </div>
    )
}
