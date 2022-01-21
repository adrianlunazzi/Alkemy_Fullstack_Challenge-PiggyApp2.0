import React from 'react'
import { store, Persistor } from "./store/store";
import { Provider } from "react-redux";
import "./piggyApp.css"
import "./bootstrap.min.css"
import { AppRouter } from './routes/AppRouter'
import { PersistGate } from 'redux-persist/integration/react';

export const PiggyApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading = {null} persistor={Persistor}>
           <AppRouter/>
           </PersistGate>
        </Provider>
    )
}
