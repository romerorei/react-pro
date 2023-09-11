import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const { formData, onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(formData)
    }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={ (e) => onSubmit(e) }>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={ name }
          onChange={ onChange }
        />

        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ onChange }
        />
        { !isValidEmail( email ) && <span>El email no es valido</span> }

        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={ password1 }
          onChange={ onChange }
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={ password2 }
          onChange={ onChange }
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Clear form</button>
      </form>

    </div>
  )
}
