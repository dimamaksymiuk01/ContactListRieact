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
                    <div className='addInfoNew'>
                        <div className='addInfo'>
                            <div className='lb'><label htmlFor='name'>Name</label></div>
                            <div className='tx'><Field type='text' name='name' /></div>
                            <div className='err'><ErrorMessage name='name'/></div> 
                        </div>

                        <div className='addInfoNew'>
                        <div className='lb'><label htmlFor='phone'>Phone</label></div>
                        <div className='tx'><Field type='text' name='phone' /></div>
                        <div className='err'><ErrorMessage name='phone'/></div>
                            
                            
                        </div>

                        <div className='addInfoNew'>
                        <div className='lb'><label htmlFor='email'>Email</label></div>
                        <div className='tx'><Field type='text' name='email' /></div>
                        <div className='err'><ErrorMessage name='email'/></div> 
                        </div>

                        <div className='addInfoNew'>
                        <div className='lb'><label htmlFor='avatar'>Avatar</label></div>
                        <div className='tx'><Field type='file' className='custom-file-input' name='avatar' /></div>
                        <div className='err'><ErrorMessage name='avatar'/></div>
                        </div>

                        <div className='addInfoNew'>
                            <label htmlFor='gender'>Gender:
                            <Field as='select' name='gender'>
                                <option value=''>Choose gender</option>
                                <option value='Men'>Men</option>
                                <option value='Women'>Women</option>
                            </Field>
                            <ErrorMessage name='gender'/>
                            </label>
                        </div>

                        <div className='addInfoNew'>
                            <label htmlFor='status'>Status:
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

                        <div className='check'>
                            <div><label htmlFor='status'>Favorite</label></div>
                            <div><Field type='checkbox' className='checkbox' name='favorite'/></div>
                        </div>

                    <button type='submit' className='bubbly-button' disabled={isSubmitting} >Add contact</button></div>
                </Form>
            )}
        </Formik>

        </div>
    )
}

export default Newcontact;
