import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import { CartContext } from '../../CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';
import "./Form.css";


const Form = () => {

    const [itemsCart, setItemsCart, addToCart, clear, clearItem] = useContext(CartContext);
    const [products, setProducts] = useState()

    const yupValidation = yup
        .object()
        .shape({
            name: yup
                .string()
                .min(2, 'Nombre inválido')
                .required(),
            adress: yup
                .string()
                .min(2, 'Dirección inválida')
                .required(),
            email: yup.string().email('Email inválido').required(),
        })
        .required();

    	const onSubmit = async (products) => {
            const docRef = await addDoc(collection(db, 'purchases'), {
                products,
            });
            console.log("listo")
        };

    const submitFunction = async (values, resetForm, products, itemsCart) => {
        setProducts({nombre: values.name, direccion: values.adress, email: values.email, productos: itemsCart})
        console.log(products);
        onSubmit(products);
        resetForm();
    };

    return (
        <Formik 
            initialValues={{ name: '', adress: '', email: '' }} 
            onSubmit={(values, { resetForm }) => submitFunction(values, resetForm, products, itemsCart)} 
            validationSchema={yupValidation}
            validate={(values) =>{
                let errors = {};

                if(!values.name){
                    errors.name = "Por favor ingresa un nombre"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    errors.name = "El nombre solo puede contener letras y espacios"
                }
                return errors
            }}
            >
            	{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isValid,
					dirty,
				}) => (
					<form className='Form container container-fluid' onSubmit={handleSubmit}>
						<TextField
							name='name'
							placeholder='Nombre y apellido'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.name}
							onBlur={handleBlur}
                            type="text"
						/>
                        <p style={{ color: "red" }}>{errors.name && touched.name && errors.name}</p>
						<TextField
							name='adress'
							placeholder='Dirección'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.adress}
							onBlur={handleBlur}
                            type="text"
						/>
                        <p style={{ color: "red" }}>{errors.adress && touched.adress && errors.adress}</p>
						<TextField
							name='email'
							placeholder='email@email.com'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.email}
							onBlur={handleBlur}
                            type="email"
						/>
                        <p style={{ color: "red" }}>{errors.email && touched.email && errors.email}</p>
						<Button
							disabled={!(isValid && dirty)}
							variant='contained'
							type='submit'
							sx={{ width: '400px', height: '54px' }}
						>
							Comprar
						</Button>
					</form>
				)}
        </Formik>
    );
};

export default Form;