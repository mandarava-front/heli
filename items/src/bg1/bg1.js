import React from 'react';
import './bg1.css'
export function Bg1(){
    return(
        <div className="bg1">
            <img src={require("../../img/bg5.png")} alt=""/>
            <div className="content">
                <div className="word">
                    <div className="title">
                        <span className="title1">他们和您一样，专注于对美的追求</span>
                        <img src={require("../../img/star.png")} alt=""/>
                        <span className="title2">指尖上的美业</span>
                    </div>
                    <div className="intr">
                        <span>我们的手艺人均经由专业培训团队一对一辅助进修。能够获取千万女性用户的信赖，</span>
                        <span>皆因手艺人的精益求精。</span>
                        <span>他们带着专业的工具，替您省去路途中的风尘仆仆，更用心行走在美业的路上。</span>
                    </div>
                </div>
            </div>
        </div>
    )
}