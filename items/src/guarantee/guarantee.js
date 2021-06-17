import React from 'react';
import './guarantee.css'
export function Guarantee(){
    return(
        <div className="whole">
            <div className="content">
                <div className="top">
                    <div className="tip">优质购物体验保障</div>
                    <div className="tips">为您的美丽保驾护航</div>
                    <div className="little">
                        <span>作为平台用户超千万的成熟美业服务平台，我们拥有完善的用户权益保障体系。</span>
                        <span>全程无忧购物体验，您只需负责安心变美，无需担忧服务质量。</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="gua"><div className="imag"><img src={require("../../img/1.png")} alt=""/></div><span>迟到升级</span></div><span className="jx"></span>
                    <div className="gua"><div className="imag"><img src={require("../../img/2.png")} alt=""/></div><span>爽约赔偿</span></div><span className="jx"></span>
                    <div className="gua"><div className="imag"><img src={require("../../img/3.png")} alt=""/></div><span>8天修复</span></div><span className="jx"></span>
                    <div className="gua"><div className="imag"><img src={require("../../img/4.png")} alt=""/></div><span>如实描述</span></div><span className="jx"></span>
                    <div className="gua"><div className="imag"><img src={require("../../img/5.png")} alt=""/></div><span>赠送保险</span></div>
                </div>
            </div>
        </div>
    )
}