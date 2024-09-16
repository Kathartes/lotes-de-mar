import React from 'react';
import './HeroProperty.css'




const HeroProperty= () => {
  
    return (
       <section className='property_hero'>
        <div className='property_image'>
            <div className='property_image-content'>
                <p>Venta de inmuebles en Punta Gorda</p>
                <p>aihaus  Venta  Casas  Montevideo  Punta Gorda </p>
            </div>
            <img className='property_image-img' src="/public/images/property-hero.png" alt="" />
        </div>
        <div className='property_info-container'>
        <article className='property_info'>
            <h1 className='property_title'></h1>
            <p className='property_address'></p>
            <ul className='property_info_state'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h2 className='property_title-info'>Info General</h2>
            <hr className='property_title-underline' />
            <p className='property_text-info'></p>
        </article>
        <article>
            <figure>
                <img src="" alt="" />
                <figcaption></figcaption>
            </figure>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button></button>
        </article>
        </div>
       </section>
    );
};

export default HeroProperty;