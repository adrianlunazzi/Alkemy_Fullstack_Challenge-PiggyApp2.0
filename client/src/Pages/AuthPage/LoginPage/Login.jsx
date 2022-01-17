import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { Formik } from 'formik'
import {Button, Form} from "react-bootstrap"
import "../auth.css"
import { Loading } from '../../../Loading/Loading'
import { ErroMessege } from '../../../components/ErroMessege/ErroMessege'
import { login } from '../../../components/Actions/authActions'

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo, loading, error} = useSelector(state => state.auth)

    const handleRegister = ()=>{
        navigate ("/register");
    }
    useEffect(() => {
        
        if(userInfo){
            navigate("/dashboard")
        
        }
      }, [navigate, userInfo]);
    return (
        <div className="loginContainer">
        {error && <ErroMessege variant ="danger">{error}</ErroMessege>}
        {loading && <Loading/>}
        <div className="loginTitle">
        <h4>Bienvenido nuevamente a Piggy Finance</h4>
       <p>Inicia sesión en tu cuenta</p> 
       </div>
       <div>

           {
           <Formik
           initialValues={{
               email: "",
               password: "",

            }}
            validate={(values)=>{
                let errors = {};
            
                if (values.email.length <=2){
                    errors.email ="El correo tiene que tener mas de 2 caracteres"
                }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                    errors.email ="Debes ingresar un correo electronico valido"
                };

                if (!values.password){
                    errors.password = "Debes ingresar una contraseña"
                }
                return errors   
            }}
            onSubmit={(values)=>{
                dispatch(login(values.email, values.password));
              
             

            }}>
                {({handleSubmit, values,touched, handleChange,handleBlur,errors})=>(
           <Form onSubmit = {handleSubmit}className ="loginForm">
               <Form.Control 
                    className="loginInput"
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
                    className="loginInput"
                    type="password"
                    name="password"
                    placeholder='Ingresa tu constraseña'
                    values = {values.email}
                    onChange= {handleChange}
                    onBlur = {handleBlur}  />
               {touched.password && errors.password && <div className ="errorMessage">{errors.password}</div>}

            <Button variant = "outline-success" className="mt-5" type="submit">Ingresar</Button>
           </Form>
           )}
           </Formik>
                }
       </div>

        <div className="lodingAcount">
            <p>No tenes cuenta?</p>
            <Button variant ="outline-info" onClick = {handleRegister} >Registrate</Button>
        </div>
    </div>
    )
}
