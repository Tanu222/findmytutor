import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../assets/styles/add-tutor.css';
import { useAppContext } from '../context/appContext';

const AddTutor = () => {
    const {createTutor} = useAppContext();
    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', location: '', description: '',skills:'' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    location: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    description: Yup.string()
                        .max(250, 'Must be 250 characters or less')
                        .required('Required'),
                    skills:Yup.string()
                    .max(2000, 'Must be 200 characters or less')
                    .required('Required'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values.skills);
                        let tutor = {
                            ...values,
                            skills:values.skills.split(" "),
                            imageUrl:'https://randomuser.me/api/portraits/women/27.jpg'
                        }
                        //console.log(tutor);
                        createTutor(tutor);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='text-center add-tutor '>
                    <div className='row justify-content-center'>
                        <label className='col-1' htmlFor="name">Name*</label>
                        <Field name="name" type="text" className='form-row col-4 m-3 p-1' placeholder="Name" />
                    </div>
                    <div className='error'>
                        <ErrorMessage name="name" />
                    </div>
                    <div className='row justify-content-center'>
                        <label className='col-1' htmlFor="email">Email*</label>
                        <Field name="email" type="email" className='form-row col-4 m-3 p-1 ' placeholder=" Email" />
                    </div>
                    <div className='error'>
                        <ErrorMessage name="email" />
                    </div>
                    <div className='row justify-content-center'>
                        <label className='col-1' htmlFor="skills">Skills*</label>
                        <Field name="skills" type="text" className='form-row col-4 m-3 p-1' placeholder=" Skills" />
                    </div>
                    <div className='error'>
                        <ErrorMessage name="skills" />
                    </div>
                    <div className='row justify-content-center'>
                        <label className='col-1' htmlFor="location">Location*</label>
                        <Field name="location" type="text" className='form-row col-4 m-3 p-1' placeholder=" Location" />
                    </div>
                    <div className='error'>
                        <ErrorMessage name="location" />
                    </div>
                    <div className='row justify-content-center'>
                        <label htmlFor='description' className="p-3 col-1">Description*</label>
                        <Field name="description" as="textarea" placeholder="Your Description" className='col-4 m-3 description' />
                    </div>
                    <div className='error '>
                        <ErrorMessage name="description" />
                    </div>
                    <button type="submit" className='btn' style={{ color: "#fff", backgroundColor: "#4fc3f7" }}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddTutor;