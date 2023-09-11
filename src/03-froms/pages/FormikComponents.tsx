import { Form, Field, ErrorMessage, Formik  } from 'formik';

import * as Yup from 'yup';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe ser de 15 caracteres o menos')
                          .required('Required'),
            lastName: Yup.string()
                          .max(20, 'Debe ser de 15 caracteres o menos')
                          .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
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

                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" />
                  <ErrorMessage name="firstName" component="span" />

                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text" />
                  <ErrorMessage name="lastName" component="span" />

                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" component="span" />

                  <label htmlFor="jobType">JobType</label>
                  <Field name="jobType" as="select" >
                    <option value="">Seleccione cargo</option>
                    <option value="QA">QA</option>
                    <option value="DEV">DEV</option>
                    <option value="UX/UI">UX/UI</option>
                  </Field>
                  <ErrorMessage name="jobType" component="span" />

                  <label>
                    <Field name="terms" type="checkbox" />
                    Terms and conditions
                  </label>
                  <ErrorMessage name="terms" component="span" />


                  <button type="submit" disabled={formik.errors && Object.keys(formik.errors).length > 0} >Submit</button>

                </Form>
              )
            }

      </Formik>

    </div>
  )
}
