import React, { useContext } from 'react';
//Mui
import { Button, TextField } from '@mui/material';
//Formik
import * as yup from 'yup';
import { Formik } from 'formik';
//Sweet Alert
import swal from 'sweetalert';
//Context
import { CartContext } from '../../CartContext';
//Firestore
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';
//Style
import "./Form.css";



const Form = () => {

    //Variables
    const [itemsCart, setItemsCart] = useContext(CartContext);

    //Functions
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

    const editStock = async (id, stock, quantity) =>{
        const itemsRef = doc(db, "stock-computadoras", id);
        await updateDoc(itemsRef, {
            stock: (stock - quantity)
        });
    }
    const submitFunction = async (values, resetForm, itemsCart) => {
        let purchase = {}

        purchase.buyer = values
        purchase.items = itemsCart

        const docRef = await addDoc(collection(db, 'purchases'), {
            purchase,
        });
        swal({
            title: "Compra realizada con exito",
            text: `ID de su compra: ${docRef.id}`,
            icon: "success",
            button: "Aceptar"
        });
        for (var i = 0; i < itemsCart.length; i++) {
            editStock(itemsCart[i].id, itemsCart[i].stock, itemsCart[i].quantity)
        }
        setItemsCart([]);
        localStorage.clear();
        resetForm();
    };

    return (
        <Formik 
            initialValues={{ name: '', surname: '', adress: '', tel: '', email: '' }} 
            onSubmit={(values, { resetForm }) => submitFunction(values, resetForm, itemsCart)} 
            validationSchema={yupValidation}
            validate={(values) =>{
                let errors = {};

                if(!values.name){
                    errors.name = "Por favor ingresa un nombre"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                    errors.name = "El nombre solo puede contener letras y espacios"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname)){
                    errors.surname = "El apellido solo puede contener letras y espacios"
                } else if (!/^([0-9])*$/.test(values.tel)){
                    errors.tel = "El telefono solo puede contener numeros"
                }
                return errors
            }}
            >
            	{({
					values,
					errors,
					touched,
					handleBlur,
                    handleChange,
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
							name='surname'
							placeholder='Apellido'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.surname}
							onBlur={handleBlur}
                            type="text"
						/>
                        <p style={{ color: "red" }}>{errors.surname && touched.surname && errors.surname}</p>
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
							name='tel'
							placeholder='Telefono'
							variant='outlined'
							className='TextField'
							sx={{ mb: 1 }}
							onChange={handleChange}
							value={values.tel}
							onBlur={handleBlur}
                            type="text"
						/>
                        <p style={{ color: "red" }}>{errors.tel && touched.tel && errors.tel}</p>
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