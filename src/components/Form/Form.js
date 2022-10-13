import React, { useContext} from 'react';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import { CartContext } from '../../CartContext';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig';
import "./Form.css";
import swal from 'sweetalert';


const Form = () => {

    const [itemsCart, setItemsCart] = useContext(CartContext);

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
        console.log(stock);
        console.log(quantity);
        console.log(stock -quantity);
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
            icon: "success",
            button: "Aceptar"
        });
        for (var i = 0; i < itemsCart.length; i++) {
            editStock(itemsCart[i].id, itemsCart[i].stock, itemsCart[i].quantity)
            console.log("listo "+ i)
        }
        setItemsCart([]);
        resetForm();
    };

    return (
        <Formik 
            initialValues={{ name: '', adress: '', email: '' }} 
            onSubmit={(values, { resetForm }) => submitFunction(values, resetForm, itemsCart)} 
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