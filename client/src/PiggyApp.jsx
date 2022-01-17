import React from 'react'
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./piggyApp.css"
import "./bootstrap.min.css"
import { AppRouter } from './routes/AppRouter'

export const PiggyApp = () => {
    return (
        <Provider store={store}>
           <AppRouter/>
        </Provider>
    )
}
