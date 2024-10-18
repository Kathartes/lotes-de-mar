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
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
                <div className='form_images_input'> foto <br /> +</div>
            </fieldset>
            <fieldset className='form_post'>
                <legend className='form_post_legend' >CUÁL ES EL TÍTULO DE LA PUBLICACIÓN</legend>
                <input className='form_post_input' type="text" placeholder='Ej: Casa de 3 dormitorios y 2 banos' />
            </fieldset>
            <fieldset className='form_post'>
                <legend className='post_description_legend'>DESCRIBE TU INMUEBLE</legend>
                <textarea className='post_description_textarea' name="" id=""></textarea>
            </fieldset>
            <fieldset className='form_post'>
                <legend>Complete la siguiente información</legend>
                <input  type="checkbox" name="" id="" />
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
            <fieldset className='form_post'>
                <legend>PRECIO DEL INMUEBLE</legend>
                <input type="number" />
            </fieldset>
            <fieldset className='form_post'>
                <legend>Complete la dirección del inmueble</legend>
                <input type="text" />
            </fieldset>
            <fieldset className='form_post'>
                <legend>Número de contacto de la inmobiliaria</legend>
                <input type="number" />
            </fieldset>
            <button type='submit'>CONTINUAR</button>
        </form>
        
        </>
    );
};

export default Post;