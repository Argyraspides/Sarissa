import './index.scss';
import TwinklingBackground from '../../assets/video/twinkling_compressed_new.mp4';
import React, { Component } from 'react';


const Background = () => {


  return (
    <div className='twinkling-backgrounds'>
        <video autoPlay loop muted>
        <source src={TwinklingBackground} type='video/mp4' />
        </video>  
    </div>
  );
};

export default Background;