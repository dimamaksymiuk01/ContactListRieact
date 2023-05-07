import './Newcontact.css';

import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuidv4 } from 'uuid';
function Newcontact() {

    const initialValues = {
        id: uuidv4(),        
        name: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '', 
        status: '',
        favorite: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().required('Phone is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        gender: Yup.string().oneOf(["Men", "Women"], "Invalid gender").required("Gender is required"),
        status: Yup.string().oneOf(["Work", "Family", "Friends", "Private"], "Invalid status").required("Status is required"),
        favorite: Yup.boolean()
    })

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='container'>

        <h1>New contact</h1>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
            {({isSubmitting}) => (
                <Form>
                        <div>
                            <label htmlFor='name'>Name
                            <Field type='text' name='name' />
                            <ErrorMessage name='name'/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor='phone'>Phone
                            <Field type='text' name='phone' />
                            <ErrorMessage name='phone'/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor='email'>Email
                            <Field type='text' name='email' />
                            <ErrorMessage name='email'/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor='avatar'>Avatar
                            <Field type='file' name='avatar' />
                            <ErrorMessage name='avatar'/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor='gender'>Gender
                            <Field as='select' name='gender'>
                                <option value=''>Choose gender</option>
                                <option value='Men'>Men</option>
                                <option value='Women'>Women</option>
                            </Field>
                            <ErrorMessage name='gender'/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor='status'>Status
                            <Field as='select' name='status'>
                                <option value=''>Choose status</option>
                                <option value='Work'>Work</option>
                                <option value='Family'>Family</option>
                                <option value='Friends'>Friends</option>
                                <option value='Private'>Private</option>
                            </Field>

                            <ErrorMessage name='status'/>

                            </label>
                        </div>

                    <button type='submit' className='btn' disabled={isSubmitting} >Add contact</button>

                </Form>
            )}
        </Formik>

        </div>
    )
}

export default Newcontact;
