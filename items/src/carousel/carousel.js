import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import './carousel.css';
import './func'  
import {Logo} from '../logo/logo';


export default function Carousel() {
        return(
                <div className="swiper">
                    <ul>
                        <li className="active"><img src={require('../../img/carousel-1.png')} alt=""/></li>
                        <li style={{display:"none"}}><img src={require('../../img/carousel-2.png')} alt=""/></li>
                        <li style={{display:"none"}}><img src={require('../../img/carousel-3.png')} alt=""/></li>
                        <li style={{display:"none"}}><img src={require('../../img/carousel-4.png')} alt=""/></li>
                        <li style={{display:"none"}}><img src={require('../../img/carousel-1.png')} alt=""/></li>
                        <li></li>
                    </ul>
                   <div className="dots"><span className="activenow"></span><span></span><span></span><span></span></div>
                    <Logo></Logo>
                </div>
        )
}
