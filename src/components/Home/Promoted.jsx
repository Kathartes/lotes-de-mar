
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Promoted.css';
// Import Swiper styles
import 'swiper/css';




// import required modules




const Promoted = () => {
  const products = [
    { 
      image: '/images/casa-1.png',
      type: 'alquiler', 
      title: 'Punta del Este, Maldonado', 
      description: '6 Dormitorios • 4 baños • 350m2',
      url: '/catalog',
      price: 'U$s 4000'
    },
    { 
      image: '/images/casa-1.png',
      type: 'alquiler', 
      title: 'Punta del Este, Maldonado', 
      description: '6 Dormitorios • 4 baños • 350m2',
      url: '/catalog',
      price: 'U$s 4000'},
    { 
      image: '/images/casa-1.png',
      type: 'alquiler', 
      title: 'Punta del Este, Maldonado', 
      description: '6 Dormitorios • 4 baños • 350m2',
      url: '/catalog',
      price: 'U$s 4000'
    },
    { 
      image: '/images/casa-1.png',
      type: 'alquiler', 
      title: 'Punta del Este, Maldonado', 
      description: '6 Dormitorios • 4 baños • 350m2',
      url: '/catalog',
      price: 'U$s 4000'
    },
  { 
    image: '/images/casa-1.png',
    type: 'alquiler', 
    title: 'Punta del Este, Maldonado', 
    description: '6 Dormitorios • 4 baños • 350m2',
    url: '/catalog',
    price: 'U$s 4000'
  },
  { 
    image: '/images/casa-1.png',
    type: 'alquiler', 
    title: 'Punta del Este, Maldonado', 
    description: '6 Dormitorios • 4 baños • 350m2',
    url: '/catalog',
    price: 'U$s 4000'},
      
  ];

    return (
        <section className='home_promoted'>
       <h2 className='home_promoted-title'>Propiedades destacadas</h2>
       <p className='home_promoted-text'>Conoce las propiedades más destacadas del mercado.</p>
        <article className='home_promoted-slider'>
              <Swiper
        slidesPerView={5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
      >
         {products.map((product, index) =>( 
           <SwiperSlide>
           <div className='promoted_card' key={index}>
             <div className='promoted_card_image'>
               <img src={product.image} alt="" />
             </div>
             <h4>{product.title}</h4>
             <p>{product.description}</p>
             <p>{product.price}<span>{product.type}</span></p>
             <button className='promoted_button'>Más info</button>
           </div>
         </SwiperSlide>
          ))}
        <SwiperSlide>
          <div className='promoted_card' >
            <div className='promoted_card_image'>
              <img src="/images/casa-1.png" alt="" />
            </div>
            <h4>Punta del Este, Maldonado</h4>
            <p>6 Dormitorios • 4 baños • 350m2 </p>
            <p>U$s 4000 mes</p>
            <button className='promoted_button'>Más info</button>
          </div>
        </SwiperSlide>
      </Swiper>
        </article>
        </section>
    );
};

export default Promoted;