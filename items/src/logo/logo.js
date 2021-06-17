import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './logo.css'
export class Logo extends React.Component {
constructor(){
    super()
}
  render(){
    return(
        <div className="content">
            <div className="left">
                <div className="logo">
                    <img src={require("../../img/logo-1.png")} alt=""/>
                    <img src={require("../../img/logo-2.png")} alt=""/>
                </div>
                <div className="ewm">
                     <span className="phoneApp"> 手机App下单</span>
                     <img src={require("../../img/ercode.png")} alt=""/>
                     <span>扫描二维码</span>
                     <span>下载河狸家用户端</span>
                </div>

            </div>
            <div className="phone">
                <img src={require("../../img/bigphone.png")} alt=""/>
            </div>
        </div>
    )
  } 
}
