import React from 'react'
import OrderForm from './OrderForm.jsx'
import { useForm } from '../../hooks/useForm';

//Crear un número aleatorio para el número de orden
const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = ()=> ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  gTotal: 0,
  orderDetails: [],
  deletedOrderItemsIds: ' ',

})
export default function Order() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls} = useForm(getFreshModelObject);

  return (
    <OrderForm
      {...{ values, errors, handleInputChange}}
    />
  )
}
