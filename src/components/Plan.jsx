import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.css';





const Plan = () => {
  
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
        <section className='plan_hero'>
            <div className='plan_hero-layer'>
            <div className='plan_hero_content-title'>
                <h1 className='plan_hero-title'>Publicá en el Portal Inmobiliario No.1 </h1>
                <p className='plan_hero-subtitle' >Más de 900 inmobiliarias y desarrolladoras ya confían en aihaus, vos también podés ser parte.</p>
            </div>
            <button className='plan_hero-button'>publicar una propiedad</button>
            </div>
        </section>
        <section className='plan_section'>
            <h2 className='plan_section-title'>inMOBILIARIAS QUE PUBLICARON EN NUESTRO PORTAL,<br /> 
            INCREMENTARON SUS VENTAS EN UN 50% DESDE EL PRIMER MES</h2>
            <article className='plan_options'>
            <div className='plan_options_cards'>
                <h3>plan 1</h3>
                <p>Hasta 10 propiedades activas
                1 propiedad destacada</p>
                <p>Propiedades ilimitadas en el historial.
                Panel de gestión de propiedades.
                Estadísticas de visitas y contactos. 
                Gestor de proyectos, clientes y pedidos</p>
                <p>U$S 115 /mes</p>
                <Link className='home_filters_article-links' to='#'>
                    CONTINUAR
                </Link>
            </div>
            <div className='plan_options_cards'>
                <h3>plan 2</h3>
                <p>Hasta 50 propiedades activas
                1 propiedad destacada</p>
                <p>Propiedades ilimitadas en el historial.
                Panel de gestión de propiedades.
                Estadísticas de visitas y contactos. 
                Gestor de proyectos, clientes y pedidos</p>
                <p>U$S 115 /mes</p>
                <Link className='home_filters_article-links' to='#'>
                    CONTINUAR
                </Link>
            </div>
            <div className='plan_options_cards'>
                <h3>plan 3</h3>
                <p>Hasta 100 propiedades activas
                1 propiedad destacada</p>
                <p>Propiedades ilimitadas en el historial.
                Panel de gestión de propiedades.
                Estadísticas de visitas y contactos. 
                Gestor de proyectos, clientes y pedidos</p>
                <p>U$S 115 /mes</p>
                <Link className='home_filters_article-links' to='#'>
                    CONTINUAR
                </Link>
            </div>
            </article>
            <h4>¡Empezá a publicar hoy!</h4>
            <p>Es un buen día para empezar algo nuevo. Publicá en InfoCasas y hacé crecer tu inmobiliaria.
            Seleccioná un plan para continuar</p>
        </section>
        <section className='plan_tips'>
            <h2>lotesdemar</h2>
            <p>tips</p>
            <div className='plan_tips_content'>

           
            <article >
            <h5>9 estrategias para AUMENTAR ventas rápidamente</h5>
            <ol>
                <li>Conoce los roles de tu equipo y su nivel de responsabilidad.</li>
                <li>Dale las herramientas correctas a tu equipo.</li>
                <li>Conoce el producto y cómo se ajusta a las necesidades del cliente.</li>
                <li>Investiga a tus clientes.</li>
                <li>Diseña una buena propuesta de venta.</li>
                <li>Analiza el contenido que la empresa ofrece a los consumidores.</li>
                <li>Combina promociones, productos o servicios.</li>
                <li>Asegúrate de que tu equipo conozca el perfil de los leads.</li>
                <li>Ofrece pruebas o demostraciones gratuitas.</li>
            </ol>
            <p>Si tus números no están marchando como esperabas o has tenido una baja 
                en ventas por cuestiones que están fuera de tu control, lo más seguro 
                es que quieras implementar algunas estrategias que rápidamente eleven 
                tus ingresos y que nivelen tu desempeño. 
                Para incentivar un plan de acción inmediato te recomendamos asegurarte 
                de las siguientes cosas:
            </p>
            <ol>
                <li>Que tu personal esté preparado para adoptar un nuevo plan de trabajo.</li>
                <li>Que cuentas con los recursos necesarios para implementar estrategias más agresivas.</li>
                <li>Que conoces los riesgos de las operaciones y los índices de ganancias que percibirás.</li>
            </ol>
            <p>Si cuentas con estos elementos, puedes implementar alguna o varias de las siguientes estrategias 
                que te ayudarán a incrementar tus ingresos rápidamente.
            </p>
            </article>
            <article>
            <h5>7 estrategias para aumentar las ventas a largo plazo</h5>
            <ol>
                <li>Enfócate en personalizar tu oferta.</li>
                <li>Mejora la experiencia del cliente.</li>
                <li>Planifica con tiempo los periodos promocionales.</li>
                <li>Capacita continuamente a tu equipo.</li>
                <li>Optimiza el proceso de nutrición de leads.</li>
                <li>Propicia la satisfacción de los colaboradores.</li>
                <li>Evalúa y retroalimenta.</li>
            </ol>
            <p>La manera más eficiente de implementar una estrategia a largo plazo es a través de los 
                líderes del equipo, quienes a su vez tienen que instruir a los representantes sobre 
                las necesidades de la empresa. 
                Es muy importante que consideres las siguientes actividades como esenciales:
            </p>
            <ol>
                <li>Acompañar a los representantes de ventas y al personal auxiliar en su día a día 
                    resolver sus dudas, optimizar los procesos, etc..</li>
                <li>Organizar y distribuir el trabajo desde una perspectiva estratégica a nivel regional.</li>
                <li>Comprender las debilidades y fortalezas del equipo.</li>
            </ol>
            <p>
                Veamos algunas de las estrategias que puedes implementar para tu plan de crecimiento a largo plazo.
            </p>
            </article>
            </div>
        </section>
        </>
    );
};

export default Plan;