import React, { useEffect } from 'react'
import {useDispatch, useSelector} from"react-redux"
import { useNavigate } from 'react-router-dom'
import { deleteOperation, getListOperation } from '../../Actions/operationAction';
import { ErroMessege } from '../../ErroMessege/ErroMessege';
import { Loading } from '../../../Loading/Loading';
import Swal from 'sweetalert2'
import "./listoperation.css"
import { GrEdit , GrTrash} from "react-icons/gr";
import {Table, Button}from "react-bootstrap"



export const ListOperation = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListOperation())
    }, [dispatch])

    const {error, operation, loading} = useSelector(state =>state.getOperation);
    


    const deleteHandler = (id) => {
        Swal.fire({
            title: '¿Querés eliminar la operación?',
            text: "Esta acción es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6f0699',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, quiero eliminarla!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Operacion Eliminada!',
                'La operación ha sido borrada.',
                'success'
              )
              dispatch(deleteOperation(id));
            }
            dispatch(getListOperation())
          })
        };
  
         const handleGetOperation = (id)=>{
          dispatch(getListOperation(id))
          navigate(`/dashboard/operation/${id}`)
          }
          
    return (

        <div className = "operationListContainer"> 

            {error && <ErroMessege variant ="danger">{error}</ErroMessege>}
            {loading && <Loading/>}
           
            
        <Table striped bordered hover variant="dark" responsive="sm"className="tableContainer" >
               
        <thead className="tableContainer">
            
          <tr >
            <th className="dataTitle">Fecha</th>
            <th className="dataTitle">Nombre</th>
            <th className="dataTitle">Monto</th>
            <th className="dataTitle">Tipo </th>
            <th className="dataTitle">Categoría</th>
            <th className="dataTitle">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {operation && operation.map(item =>(
          <tr key = {item.id}>
            <td className="dataRow">{item.date.substring(0,10)}</td>
            <td className="dataRow">{item.name}</td>
            <td className="dataRow">{item.amount}</td>
            <td className="dataRow">{item.operationTypes.name}</td>
            <td className="dataRow">{item.categories.name}</td>
            <td className="btn_Container">  
            <Button variant = "info"  onClick = {()=>handleGetOperation(item.id)}><GrEdit/></Button>
            <Button variant ="danger"onClick = {()=>deleteHandler(item.id)}><GrTrash/></Button>
            </td>
          </tr>
           ))}
        </tbody>
       
      </Table>
              </div>
    )
}
