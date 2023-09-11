import { useFormik } from 'formik';

import * as Yup from 'yup';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikYupPage = () => {

  // Se puede desestructurar el formik en { handleSubmit, handleChange, values, errors, touched, handleBlur, getFieldProps, etc...  }
  const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values)
      },
      validationSchema: Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe tener menos de 15 caracteres')
                        .required('Requerido'),
          lastName: Yup.string()
                        .max(15, 'Debe tener menos de 15 caracteres')
                        .required('Requerido'),
          email: Yup.string().email('Debe ser un correo valido')
      })
  })

  // getFieldProps nos ahorra lineas solo es: { ...formik.getFieldProps('firstName') } en vez de las de abajo
  // name="firstName"
  // onBlur={ formik.handleBlur }
  // onChange={ formik.handleChange }
  // value={ formik.values.firstName }

  return (
    <div>
      <h1>Formik Yup tutorial</h1>

      <form onSubmit={ formik.handleSubmit } noValidate>

        <label htmlFor="firstName">First Name</label>
        <input type="text" { ...formik.getFieldProps('firstName') } />
       { formik.touched.firstName && formik.errors.firstName &&  <span>{ formik.errors.firstName }</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" { ...formik.getFieldProps('lastName') } />
        { formik.touched.lastName && formik.errors.lastName &&  <span>{ formik.errors.lastName }</span>}

        <label htmlFor="firstName">Email</label>
        <input type="email"  {...formik.getFieldProps('email') } />
        { formik.touched.email && formik.errors.email &&  <span>{ formik.errors.email }</span>}

        <button type="submit" disabled={formik.errors && Object.keys(formik.errors).length > 0} >Submit</button>

      </form>

    </div>
  )
}
