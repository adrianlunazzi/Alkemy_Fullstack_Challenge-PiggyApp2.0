import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector}from "react-redux"
import {useNavigate}from "react-router-dom"
import { Formik } from 'formik'
import {Button, Form, Modal}from "react-bootstrap"
import { createCategories, getListCategories } from '../../Actions/categoryActions'
import { getOperationType } from '../../Actions/operationTypeAction'
import { createOperation } from '../../Actions/operationAction'
import './newoperation.css'

export const NewOperation = () => {
    const navigate = useNavigate()
    const userConect = localStorage.getItem("userInfo")
    const userId = JSON.parse(userConect)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getOperationType()); 

    }, [dispatch]);
    useEffect(() => {
        dispatch( getListCategories()); 
 
     }, [dispatch]);
    const {operationType} = useSelector(state => state.getOperationType);
    const {category} = useSelector(state => state.getCategory)


    return (
        <div className="newOperationContainer">
            <h3>Registrar nueva operación</h3>

        <Formik
            initialValues={{
                name: "",
                amount: "",
                date:"",
                operationTypeId: "",
                userId: userId.id,
                categoryId: "",
             }}

             validate ={(values)=>{
                 let errors = {};
                 if (values.name.length <2){
                    errors.name ="El nombre de la categoria debe tener mas de 2 caracteres"
                }
                if (!values.amount){
                    errors.amount ="Este campo no puede estar vacio"
                   }else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.amount)){
                    errors.amount ="Solo podes ingresar numeros"
                   }
                   if (!values.date){
                    errors.date ="Debes ingresar la fecha de la operacion a registrar"
                   }
                   if (!values.operationTypeId){
                    errors.operationTypeId ="Debes ingresar el tipo de operación"
                   }
                   if (!values.categoryId){
                    errors.categoryId ="Debes asignar una categoria a la operacion a registrar"
                   }
                   return errors
               }}  
               onSubmit = {(values )=>{
               dispatch(createOperation(values.name, values.amount, values.date, values.operationTypeId, values.userId, values.categoryId))
               navigate("/dashboard/operation")
               
               }}>
                   {({handleSubmit,handleChange, handleBlur, values, touched, errors})=>(
            <Form onSubmit={handleSubmit} className="my-5">
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Nombre de la operacion a registrar </Form.Label>  
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Ingresa el nombre de la operacion a registrar"
                            value = {values.name}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.name && errors.name && <div className ="errorMessage">{errors.name}</div>}
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Monto a registrar </Form.Label>  
                        <Form.Control
                            name="amount"
                            type="text"
                            placeholder="Ingresa el monto a registrar"
                            value = {values.amount}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.amount && errors.amount && <div className ="errorMessage">{errors.amount}</div>}
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Fecha de la operacion </Form.Label>  
                        <Form.Control
                            name="date"
                            type="date"
                            placeholder="Ingresa la fecha de la operacion a registrar"
                            value = {values.date}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.date && errors.date && <div className ="errorMessage">{errors.date}</div>}
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Tipo de Operacion </Form.Label>
                        <Form.Select 
                        className="mt-1"
                        name="operationTypeId"
                        value = {values.operationTypeId}
                        onChange= {handleChange}
                        onBlur = {handleBlur}
                        >
                        <option>Selecciona el tipo de operacion</option> 
                            {
                                 operationType && operationType.map((item)=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                            }
                        </Form.Select>
                        {touched.operationTypeId && errors.operationTypeId && <div className ="errorMessage">{errors.operationTypeId}</div>}
                    </Form.Group>
                    
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        
                        <Form.Label>Categoria de la operación </Form.Label>
                        <div className ="categorySelectContainer">
                        <Form.Select 
                        className="mt-1"
                        name="categoryId"
                        value = {values.categoryId}
                        onChange= {handleChange}
                        onBlur = {handleBlur}
                        >
                        <option>Selecciona la categoria de la operación</option> 
                            {
                                 category && category.map((item)=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                            }
                        </Form.Select>
                       
                        <Button variant ="info" onClick={handleShow} >+</Button>
                        </div>
                        {touched.categoryId && errors.categoryId && <div className ="errorMessage">{errors.categoryId}</div>}
                    </Form.Group>
                   
                    <Button type="submit" variant ="secondary" className="mt-5">Registrar Operación!!</Button>
            </Form>
        )}
        </Formik>
        
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Categoría</Modal.Title>
            </Modal.Header>
            <Formik
            initialValues={{
                name: "",
                operationTypeId: "",
                userId: userId.id,
             }}
             validate ={(values)=>{
                let errors = {};
                if (values.name.length <2){
                   errors.name ="El nombre de la categoria debe tener mas de 2 caracteres"
               }
                if (!values.operationTypeId){
                 errors.operationTypeId ="Debes ingresar el tipo de operación"
                }

                  return errors
              }}  
              onSubmit = {(values )=>{
                
                dispatch(createCategories(values.name, values.operationTypeId, values.userId))
                dispatch(getListCategories())
                
                handleClose()
                
                
                }}>
                {({handleSubmit,handleChange, handleBlur, values, touched, errors})=>(
            <Form onSubmit={handleSubmit} className="modalNewCategoryContainer">
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Nombre de la categoría</Form.Label>  
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Nombre de la categoría a registrar"
                            value = {values.name}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.name && errors.name && <div className ="errorMessage">{errors.name}</div>}
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Label>Tipo de Operacion </Form.Label>
                        <Form.Select 
                        className="mt-1"
                        name="operationTypeId"
                        value = {values.operationTypeId}
                        onChange= {handleChange}
                        onBlur = {handleBlur}
                        >
                        <option>Selecciona el tipo de operacion</option> 
                            {
                                 operationType && operationType.map((item)=>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                            }
                        </Form.Select>
                        {touched.operationTypeId && errors.operationTypeId && <div className ="errorMessage">{errors.operationTypeId}</div>}
                    </Form.Group>

                   
                    <Button type="submit" variant ="outline-success" className="mt-3">Registrar Categoría!!</Button>
            </Form>
        )}
  
            </Formik>  
        </Modal>
    </>

        </div>  
    )
    
}
