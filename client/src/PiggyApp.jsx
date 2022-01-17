import React from 'react'
import "./piggyApp.css"
import "./bootstrap.min.css"
import { AppRouter } from './routes/AppRouter'

export const PiggyApp = () => {
    return (
        <div>
           <AppRouter/>
        </div>
    )
}
