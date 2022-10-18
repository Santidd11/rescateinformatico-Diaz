import React from 'react';
//Img
import marcas from "../../components/assets/logos/marcas.jpg";
//Style
import "./SobreNosotros.css";


const SobreNosotros = () => {
    return(
        <div className='mt-4'>
            <h2 className='fw-bold text-success'>Nosotros</h2>
            <p className='fs-3 mx-2'>Somos una empresa dedicada a resolver los problemas tecnológicos. Poseemos un amplio stock de insumos computacionales para ofrecerle la mejor calidad de servicio a los usuarios. Contamos con más de 20 años de experiencia en el rubro de la mano de nuestros mejores técnicos</p>
            <h2 className='fw-bold text-success'>Local</h2>
            <p className='fs-4'>Nuestro local se encuentra en San Rafael, Mendoza.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.239971896295!2d-68.35564368517579!3d-34.6233755660447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679081ef50e54ff%3A0x7340d27f9493868f!2sRescate%20Inform%C3%A1tico!5e0!3m2!1ses-419!2sar!4v1665956846275!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" title='myframe' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h2 className='fw-bold text-success'>Contacto</h2>
            <p>Teléfono celular: 0260 456-2627</p>
            <p>Mail: diazpablo23@hotmail.com</p>
            <h2 className='fw-bold text-success'>Nuestras marcas</h2>
            <img src={marcas}  alt='marcas' />
        </div>
    )
}

export default SobreNosotros