import React from 'react';
import './bg2.css';

export function Bg2(){
    return (
    <div className="bg2">
        <img src={require("../../img/bg2.png")} alt=""/>
        <div className="content">
            <div className="logo1">
                <img src={require("../../img/logo-new.png")} alt=""/>
                <span className="wish">成为中产阶级家庭复杂服务的首选平台</span>
                <div className="text">
                   <span>我们相信河狸家会为更多手艺人带来工作机会和经济收益。</span>
                   <span>同时提供更便捷的变美服务，为消费者增添自信和魅力。</span>
                </div>
            </div>
        </div>
    </div>)
}