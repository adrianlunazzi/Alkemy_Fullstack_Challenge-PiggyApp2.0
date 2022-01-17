import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getListOperation } from '../Actions/operationAction';


import './balance.css'

export const Balance = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListOperation())
    }, [dispatch]);
    
    const {operation} = useSelector(state => state.getOperation)
   

    const totalIncome = () => {
        const operationIncomeList =
          operation && operation.filter((income) => income.operationTypeId === 1);
        const incomeResult =
          operationIncomeList && operationIncomeList.map((items) => items.amount);
        const acumInc = (acum, num) => acum + num;
        const totalIncome = incomeResult && incomeResult.reduce(acumInc, 0);
      
        return totalIncome;
      };

    const totalExpense = () =>{
        const operationExpenseList = operation && operation.filter ((expenses)=> expenses.operationTypeId === 2);
        const expenseResult = operationExpenseList && operationExpenseList.map ((items)=>items.amount);
        const acumExp = (acum, num) => acum + num;
        const totalExpense = expenseResult && expenseResult.reduce(acumExp, 0);
        return totalExpense;
    }

    const totalBalance = () =>{
       const total =  totalIncome()-totalExpense();
       return total

    }
    return (
       
        <div className="balanceContainer">
            <div className="balanceResults">
                <div>
                Total: ${totalBalance()} 
                </div>
                <div>
                Ingresos: $ {totalIncome()}
                </div>
                <div>
                Gastos: $ {totalExpense()}
                </div>
            </div>
        </div>
        
    )
}
