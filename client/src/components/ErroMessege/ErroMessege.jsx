import React from 'react'
import { Alert } from 'react-bootstrap'


export const ErroMessege = ({ variant = "info", children}) => {
    return (
        <Alert variant = {variant} className = "mgeStyle">
            <strong>{children}</strong>
        </Alert>
    )
}
