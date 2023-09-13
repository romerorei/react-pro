
import * as Yup from 'yup';

import '../styles/styles.css';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik

          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
            terms: false,
            jobType: ''
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                          .min(2, 'El campo debe tener mas de dos caracteres')
                          .max(15, 'Debe ser de 15 caracteres o menos')
                          .required('Required'),
            lastName: Yup.string()
                          .min(2, 'El campo debe tener mas de dos caracteres')
                          .max(20, 'Debe ser de 15 caracteres o menos')
                          .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password1: Yup.string().required('Required').min(6,'Minimo 6 caracteres'),
            password2: Yup.string().oneOf([Yup.ref('password1')], 'Passwords deben ser iguales'),
            terms: Yup.boolean()
                      .required('Required')
                      .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
                        .oneOf( ['UX/UI', 'QA', 'DEV'], 'Invalid Job Type' )
                        .required('Required'),
          })}
          onSubmit={( values ) => {
            console.log( values )
          }}
      >

            {
              formik => (
                <Form>

                  <MyTextInput label="First Name" name="firstName" placeholder="Tu nombre aqui..."/>

                  <MyTextInput label="Last Name" name="lastName"/>

                  <MyTextInput label="Email" name="email" type="email"/>

                  <MyTextInput label="Password" name="password1" type="password"/>

                  <MyTextInput label="Repeat Password" name="password2" type="password"/>

                  <MySelect label="Job Type" name="jobType" as="select" >
                    <option value="">Seleccione cargo</option>
                    <option value="QA">QA</option>
                    <option value="DEV">DEV</option>
                    <option value="UX/UI">UX/UI</option>
                  </MySelect>

                  <MyCheckbox label="Termns & Conditions" name='terms' />

                  <button type="submit" disabled={formik.errors && Object.keys(formik.errors).length > 0} >Submit</button>

                  <button type="submit" onClick={formik.handleReset} >Reset Form</button>

                </Form>
              )
            }

      </Formik>

    </div>
  )
}
