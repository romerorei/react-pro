import { Form, Formik  } from 'formik';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';

import * as Yup from 'yup';
import { MyCheckbox } from '../components/MyCheckbox';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikAbstratation = () => {

  return (
    <div>
      <h1>Formik Abstratation</h1>

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

                  <MyTextInput label="First Name" name="firstName" placeholder="Tu nombre aqui..."/>

                  <MyTextInput label="Last Name" name="lastName"/>

                  <MyTextInput label="email" name="email" type="email"/>

                  <MySelect label="Job Type" name="jobType" as="select" >
                    <option value="">Seleccione cargo</option>
                    <option value="QA">QA</option>
                    <option value="DEV">DEV</option>
                    <option value="UX/UI">UX/UI</option>
                  </MySelect>

                  <MyCheckbox label="Termns & Conditions" name='terms' />

                  <button type="submit" disabled={formik.errors && Object.keys(formik.errors).length > 0} >Submit</button>

                </Form>
              )
            }

      </Formik>

    </div>
  )
}
