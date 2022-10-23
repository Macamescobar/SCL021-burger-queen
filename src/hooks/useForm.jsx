import React, {useState} from "react";

export function useForm(getFreshModelObject) {
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    //Manejar el cambio de estado del form (OrderForm)
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
     //Reestablecer el estado inicial del form
    const resetFormControls = () => {
        setValues(getFreshModelObject());
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    }

}