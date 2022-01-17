import React, { useEffect }  from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { getListCategories } from '../../Actions/categoryActions';
import { updateOperation } from '../../Actions/operationAction';
import './operationdetail.css'
import { ErroMessege } from '../../ErroMessege/ErroMessege';
import { Loading } from '../../../Loading/Loading';

export const OperationDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const {operation, error, loading} = useSelector(state => state.getOperation)
    const {category} = useSelector(state => state.getCategory)

    const operationSelected = operation && operation.filter (item =>item.id == id )
   
    useEffect(() => {
        dispatch(getListCategories())
    }, [dispatch])
    return (
        <>
        <div className="operationDetailContainer">
            <h3>Editar Operacion</h3>
            {error && <ErroMessege variant ="danger">{error}</ErroMessege>}
            {loading && <Loading/>}
            { operationSelected && operationSelected.map(item=>(
            <Formik key= {item.id}
            
            initialValues={{
                id: item.id,
                name: item.name,
                amount: item.amount,
                date:item.date.substring(0,10),
                categoryId: item.categories.id,
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
                   if (!values.categoryId){
                    errors.categoryId ="Debes asignar una categoria a la operacion a registrar"
                   }
                   return errors
               }}  
               onSubmit = {(values )=>{
               dispatch(updateOperation(values.id, values.name, values.amount, values.date, values.categoryId))
               
               navigate("/dashboard/operation")
              
               
               }}>
                   {({handleSubmit,handleChange, handleBlur, values, touched, errors})=>(
            <Form onSubmit={handleSubmit} className="formDetailContainer">
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Nombre de la operacion a Editar </Form.Label>  
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Ingresa el nombre de la operacion a editar"
                            value = {values.name}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.name && errors.name && <div className ="errorMessage">{errors.name}</div>}
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Monto a editar </Form.Label>  
                        <Form.Control
                            name="amount"
                            type="text"
                            placeholder="Ingresa el monto a editar"
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
                            value = {values.date}
                            onChange= {handleChange}
                            onBlur = {handleBlur}
                        />
                        {touched.date && errors.date && <div className ="errorMessage">{errors.date}</div>}
                    </Form.Group>        
                    <Form.Label>Categoria de la operación </Form.Label>
                        
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
                   <div className="btnOperationUpdateContainer">
                    <Button type="submit" variant ="secondary" className="mx-5 mt-5">Editar Operación!!</Button>
                    <Button as= {Link} to= {"/dashboard/operation/"}  variant ="info" className="mt-5 mx-5">Volver a mis operaciones</Button>
                    </div>         
            </Form>
        )}
        
        </Formik>
        
        ))
    }

        </div>
      
        </>
    )
}
