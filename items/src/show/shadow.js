import React from 'react';
import { ReactDOM, Component } from 'react-dom';
import { render } from 'react-dom';
export function Shadow(){
//    render(){
    return (
       
            <div className="imga">
                <div className="mag"><img src={require('../../img/show-1.png')} alt=""/>
                    <div className="shadow"><span className="zhcn">美甲</span><span className="english">Nails</span></div> 
                </div>
                <div className="mag"><img src={require('../../img/show-2.png')} alt=""/><div className="shadow"><span className="zhcn">美睫</span><span className="english">Eyelashes</span></div></div>
                <div className="mag"><img src={require('../../img/show-3.png')} alt=""/><div className="shadow"><span className="zhcn">美容</span><span className="english">Facial-care</span></div></div>
                <div className="mag"><img src={require('../../img/show-4.png')} alt=""/><div className="shadow"><span className="zhcn">微整形</span><span className="english">Micro plastic</span></div></div>
                <div className="mag"><img src={require('../../img/show-5.png')} alt=""/><div className="shadow"><span className="zhcn">理疗</span><span className="english">Physiotherapy</span></div></div>
                <div className="mag"><img src={require('../../img/show-6.png')} alt=""/><div className="shadow"><span className="zhcn">健身</span><span className="english">Fitness</span></div></div>
                <div className="mag"><img src={require('../../img/show-7.png')} alt=""/><div className="shadow"><span className="zhcn">美发</span><span className="english">Hear Salon</span></div></div>
                <div className="mag"><img src={require('../../img/show-8.png')} alt=""/><div className="shadow"><span className="zhcn">半永久</span><span className="english">Semipermanent</span></div></div>
                <div className="mag"><img src={require('../../img/show-9.png')} alt=""/><div className="shadow"><span className="zhcn">美体</span><span className="english">SPA</span></div></div>
                <div className="mag"><img src={require('../../img/show-10.png')} alt=""/><div className="shadow"><span className="zhcn">化妆</span><span className="english">Make up</span></div></div>
            </div>
   
    )
//    }
}