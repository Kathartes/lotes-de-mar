import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';





const Post = () => {
  
    return (
        <>
        <header className='home_header'>
            <div className='home_logo'>
                <img src="/icons/whale.png" alt="" />
                <p className='home_logo-title'>Lotesde<span>mar</span></p>
            </div>
            <div className='home_login'>
                <img src="/icons/user.png" alt="" />
            </div>
        </header>
        <form className='form_container' action="">
            <h1 className='form_title'>¡Empezá a publicar hoy!</h1>
            <p className='form_subtitle'>continúa los siguientes pasos y en menos de 3 minutos publica tu inmueble</p>
            <fieldset className='form_images'>
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
                <input type="file" />
            </fieldset>
            <fieldset>
                <legend>CUÁL ES EL TÍTULO DE LA PUBLICACIÓN</legend>
                <input type="text" />
            </fieldset>
            <fieldset>
                <legend>DESCRIBE TU INMUEBLE</legend>
                <textarea name="" id=""></textarea>
            </fieldset>
            <fieldset>
                <legend>Complete la siguiente información</legend>
                <input type="checkbox" name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
                <input type="checkbox"  name="" id="" />
            </fieldset>
            <fieldset>
                <legend>PRECIO DEL INMUEBLE</legend>
                <input type="number" />
            </fieldset>
            <fieldset>
                <legend>Complete la dirección del inmueble</legend>
                <input type="text" />
            </fieldset>
            <fieldset>
                <legend>Número de contacto de la inmobiliaria</legend>
                <input type="number" />
            </fieldset>
            <button type='submit'>CONTINUAR</button>
        </form>
        
        </>
    );
};

export default Post;