import React from 'react'
import {  Link } from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux"
import { register } from '../../../components/Actions/authActions'
import { Loading } from '../../../Loading/Loading'
import { ErroMessege } from '../../../components/ErroMessege/ErroMessege'
import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'


export const Register = () => {
    const dispatch = useDispatch()
    const {loading, error} = useSelector ((state)=> state.register)
    return (
        <div className="registerContainer">
            {error && <ErroMessege variant ="danger">{error}</ErroMessege>}
            {loading && <Loading/>}
            <div className ="registerTitle" >
            <h1>Registra tu usuario en Piggy</h1>
            <p>Para poder crear tu usuario, completa los siguientes campos</p>
            </div>
            <div>
            <Formik
               initialValues={{
                name: "",
                   email: "",
                   password: "",
                   

                }}
                validate={(values)=>{
                    let errors = {};
                    if (values.name.length <=2){
                        errors.name = "El nombre debe tener mas de 2 caracteres"
                    }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        errors.name = "El nombre no debe tener numeros "
                    };
                
                    if (values.email.length <=2){
                        errors.email ="El correo tiene que tener mas de 2 caracteres"
                    }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        errors.email ="Debes ingresar un correo electronico valido"
                    };

                    if (!values.password){
                        errors.password = "Debes ingresar una contraseña"
                    }
                    if (values.password.length <=5){
                        errors.password = "El nombre debe tener mas de 4 caracteres"
                    }
                    return errors   
                }}
                onSubmit={(values, errors)=>{
                    
                    dispatch(register(values.name,values.email, values.password))  
                }}>
                    {({handleSubmit, values,touched, handleChange,handleBlur,errors})=>(
               <Form onSubmit = {handleSubmit}className ="registerForm">
                    <Form.Control  
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder='Ingresa tu nombre'
                        autoComplete="none"
                        values = {values.email}
                        onChange= {handleChange}
                        onBlur = {handleBlur} />
                    {touched.name && errors.name && <div className ="errorMessage">{errors.name}</div>}
                   <br />
                   <Form.Control  
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder='Ingresa tu mail'
                        autoComplete="none"
                        values = {values.email}
                        onChange= {handleChange}
                        onBlur = {handleBlur} />
                    {touched.email && errors.email && <div className ="errorMessage">{errors.email}</div>}
                   <br />
                    <Form.Control  
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder='Ingresa tu constraseña'
                        values = {values.email}
                        onChange= {handleChange}
                        onBlur = {handleBlur}  />
                   {touched.password && errors.password && <div className ="errorMessage">{errors.password}</div>}

                <Button  variant = "primary" className="mt-5" type="submit">Enviar datos</Button>
                <Button  as ={Link} to="/login" variant = "secondary" className="mt-2" >Ingresar a la app</Button>
               </Form>
               )}
               </Formik>
            </div>
        </div>
    )
}
