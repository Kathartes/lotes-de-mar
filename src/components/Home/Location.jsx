import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './Location.css';
import 'swiper/css';
import 'swiper/css/navigation';



const Location = () => {
  
    return (
        <section className='home_location'>
            <h2 className='home_location-title'>busca segun tu ubicacion</h2>
            <p className='home_location-text'>Hay 13 viviendas cerca de tu ubicación que se ajustan a tu perfil  </p>
            <Swiper navigation={true} 
            modules={[Navigation]} 
            className="location_swiper"
            >
                <SwiperSlide>
                    <div className='location_article'> 
                        <div className='location_article-image'>
                            <img src="/public/images/mapa-editado.png" alt="" />
                        </div>
                        <div className='location_article-content'>
                            <h3>Punta Ballena</h3>
                            <p>Entre los diques y el río, un distrito moderno y con una 
                                propuesta de lujo. Un espacio donde conviven los
                                nuevos emprendimientos, las mejores torres residenciales y hoteles de altísima categoría. 
                                Los diques están rodeados de edificios portuarios de ladrillo, que albergan oficinas, restaurantes y clubes nocturnos.
                                Punta Gorda se destaca por su arquitectura moderna: 
                                sus grandes torres con vistas increíbles del río y de la ciudad. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
               
            </Swiper>
        </section>
    );
};

export default Location;