import { Form, Formik } from "formik"
import formJson from "../data/custom-form.json"
import { MyTextInput } from "../components/MyTextInput"
import { MySelect } from "../components/MySelect"
import * as Yup from 'yup';

//console.log(formJson)
const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for ( const input of formJson ) {
  initialValues[ input.name ] = input.value

  if (!input.validations) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.msg)
    }

    if (rule.type === 'minLength') {
      schema = schema.min( (rule as any).value || 2, `${rule.msg} ${(rule as any).value || 2}` )
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.msg)
    }
    // ... otras reglas
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ (values) => {
          console.log(values)
        } }
      >
          { (formik) => (
            <Form noValidate>
              { formJson.map( field => {

                if (field.type === 'input' || field.type === 'password' || field.type === 'email' ) {
                  return <MyTextInput
                          key={field.name}
                          type={(field.type as any)}
                          label={field.label}
                          name={field.name}
                          placeholder={field.placeholder}
                        />
                } else if ( field.type === 'select' ) {
                  return (
                    <MySelect
                      key={field.name}
                      label={field.label}
                      name={field.name}
                    >
                      <option value="">Select a option</option>
                      {
                        field.options?.map( option =>
                          <option key={option.id} value={option.id}>{option.label}</option>
                          )
                      }
                    </MySelect>
                  )
                }
                  throw new Error(`El type:${ field.name }, no es soportado`);
              } ) }


              <button type="submit">Submit</button>
            </Form>
          )}

      </Formik>

    </div>
  )
}
