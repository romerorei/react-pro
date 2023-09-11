import { useState, ChangeEvent } from 'react';


export const useForm = <T>( initState: T ) => {

  const [ formData , setFormData ] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setFormData ( prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }) )

  }

  const resetForm = () => {
    setFormData({ ...initState })
  }

  // valida la estructura del email en el formulario
  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    ...formData,// esto me permite desectructurar la campos en RegisterPage
     formData,
     setFormData,
     onChange,
     resetForm,
     isValidEmail }
}
