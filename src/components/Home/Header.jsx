import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';




const Header = () => {
  
    return (
        <>
        <header className='home_header'>
            <div className='home_logo'>
                <p className='home_logo-title'>Lotes de mar</p>
            </div>
            <div className='home_login'>
                <p className='home_logo-login'>login</p>
            </div>
        </header>
        <section className='home_hero'>
            <h1 className='home_hero-title'>comprar y alquilar lotes cerca del mar</h1>
            <div className='home_hero_search'>
                <div className='home_hero_filters'> 
                    <button className='home_hero_filters-button' type="submit">Venta</button>
                    <button className='home_hero_filters-button' type="submit">Alquiler</button>
                    <button className='home_hero_filters-button' type="submit">Temporal</button>
                </div>
                <form className='home_hero_search_form' action="#">
                    <input className='home_hero_search_form-input'  type="text" placeholder="Search.." name="search"></input>
                    <button className='home_hero_filters-button' type="submit">Buscar</button>
                </form>
            </div>
        </section>
        <section className='home_filters'>
            <h2 className='home_filters-title'>busca rapidamente segun tus preferencias</h2>
            <article className='home_filters_article'>
            
            <Link className='home_filters_article-links' to='#'>
                <img src="/public/icons/tree.png" alt="" />
                terrenos
            </Link>
            <Link className='home_filters_article-links' to='#'>
            <img src="/public/icons/house.png" alt="" />
                casas
            </Link>
            <Link className='home_filters_article-links' to='#'>
            <img src="/public/icons/apartment.png" alt="" />
                apartamentos
            </Link>
            <Link className='home_filters_article-links' to='#'>
                <img src="/public/icons/grass.png" alt="" />
                chacras
            </Link>
            <Link className='home_filters_article-links' to='#'>
                <img src="/public/icons/soil.png" alt="" />
                campos
            </Link>
            </article>
        </section>
        </>
    );
};

export default Header;