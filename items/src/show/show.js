import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './show.css';
import $ from 'jquery';
import './event';
import {Shadow} from './shadow'

 export class Show extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="show">
                  <div className="content">
                     <div>
                         <div className="workd">
                             <span className="work">为爱美女性提供变美需求</span>
                             <span className="birth">河狸家成立于2014年3月11日，是一家线上美业服务平台。</span>
                         </div>
                     </div>
                  </div>
                <div className="show2">
                    <div className="content">
                        <Shadow></Shadow>
                        <div className="word">
                           <span className="title">让生活美起来</span>
                           <span className="span2">一站式美业服务</span>
                           <div className="text">
                               <span>从线上到线下，从上门服务到到店体验，从美甲、美睫、理疗到手足护理、生活美容、医疗美容，</span>
                               <span>从化妆造型到美发、健身，我们有完整的全线连锁品牌生态闭环。</span>
                               <span>根据用户对个性化服务的需求提供定制化服务，从服务类目到服务艺师都可享受自由定制的星级服务。</span>
                           </div>
                        </div>
                    </div>
                </div>
                
               
             </div>
             
        )
    }
}