import React from 'react';
import { Link } from 'react-router-dom';

import Bar from './Property/Bar';
import HeroProperty from './Property/HeroProperty';
import DescriptionProperty from './Property/DescriptionProperty';
import News from './Home/News';




const Property = () => {
  
    return (
        <>
         <Bar />
         <HeroProperty />
         <DescriptionProperty />
         <News />
        </>
    );
};

export default Property;