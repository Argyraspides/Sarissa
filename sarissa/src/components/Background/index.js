import './index.scss';
import TwinklingBackground from '../../assets/video/twinkling.webm';
import React, { Component } from 'react';


const Background = () => {


  return (
    <div className='twinkling-backgrounds'>
        <video autoPlay loop muted playbackRate={0.1}>
        <source src={TwinklingBackground} type='video/webm' />
        </video>  
    </div>
  );
};

export default Background;