import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel/carousel";
import { Show } from "./show/show";
import "./css/index.css";
import $ from "jquery";
import { Map } from "./map/map";
import { Bg1 } from "./bg1/bg1";
import { Guarantee } from "./guarantee/guarantee";
import { Bg2 } from "./bg1/bg2";
import { Foot } from "./foot/foot";
import { But } from "./bg1/but";
import "./indexfun.js";
ReactDOM.render(
  <div>
    <Carousel></Carousel>
    <Show></Show>
    <Map></Map>
    <Bg1></Bg1>
    <Guarantee></Guarantee>
    <Bg2></Bg2>
    <Foot></Foot>
    <But></But>
  </div>,

  document.getElementById("app")
);
