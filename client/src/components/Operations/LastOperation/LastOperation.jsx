import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../Loading/Loading';
import { getListOperation } from '../../Actions/operationAction';
import { ErroMessege } from '../../ErroMessege/ErroMessege';
import "./lastoperation.css"

export const LastOperation = () => {
    const dispatch = useDispatch();
    const {error, operation, loading} = useSelector(state =>state.getOperation);
    const lastTenOperation = operation && operation.slice(0,10)

    useEffect(() => {
        dispatch(getListOperation())
    }, [dispatch])
    return (
            <div className = "operationListContainer"> 
            <h3>Últimas operaciones</h3>
             {error && <ErroMessege variant ="danger">{error}</ErroMessege>}
                {loading && <Loading/>}
                <Table striped bordered hover variant="dark" responsive="sm"className="tableContainer" >
                   
      <thead className="tableContainer">
          
        <tr >
          <th className="dataTitle">Fecha</th>
          <th className="dataTitle">Nombre</th>
          <th className="dataTitle">Monto</th>

        </tr>
      </thead>
      <tbody>
        {lastTenOperation && lastTenOperation.map(item =>(
        <tr key = {item.id}>
          <td className="dataRow">{item.date.substring(0,10)}</td>
          <td className="dataRow">{item.name}</td>
          <td className="dataRow">$ {item.amount}</td>

        </tr>
         ))}
      </tbody>
     
    </Table>
            </div>
        )
}
