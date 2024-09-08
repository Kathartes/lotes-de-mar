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
                <button type="submit">Venta</button>
                <button type="submit">Alquiler</button>
                <form action="#">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
        <section className='home_filters'>
            <h2 className='home_filters-title'>busca rapidamente segun tus preferencias</h2>
            <article className='home_filters_article'>
            <Link className='home_filters_article-links' to='#'>
                lotes
            </Link>
            <Link className='home_filters_article-links' to='#'>
                terrenos
            </Link>
            <Link className='home_filters_article-links' to='#'>
                casas
            </Link>
            <Link className='home_filters_article-links' to='#'>
                chacras
            </Link>
            </article>
        </section>
        </>
    );
};

export default Header;