import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';




const News = () => {
  
    return (
        <section className='home_news'>
                    <h2>noticias recomendadas</h2>
                    <div class="parent">
                        <div class="child div1"> 
                        <img src="/public/images/logar-parquet.jpg" alt="" />
                        <p>Pensando en tus pisos nuevos <br />Colocacion y tratamientos de pisos</p>
                          
                        </div>
                        <div class=" child div2">
                        <img src="/public/images/betonmac.jpg" alt="" />
                            <p>Soluciones en hormigon
                            </p>
                        </div>
                        <div class="child div3"> 
                            <img src="/public/images/yeso-bresso.jpg" alt="" /> 
                            <p>Construir rapido y limpio se puede<br />Soluciones de construcción en seco</p>
                        </div>
                        <div class="child div4"> 
                            <img src="/public/images/cabo-agua.jpg" alt="" /> 
                            <p>Emprendedores del mar <br /> conoce cabo agua de mar</p>
                        </div>
                        <div class="child div5">
                        <img src="/public/images/city.webp" alt="" /> 
                            <p>conoce todo sobre tufting <br /> alfombras decorativas </p>
                           
                        </div>
                      
                    </div>
        </section>
    );
};

export default News;