import React from "react";
import "./foot.css";
export function Foot() {
  return (
    <div className="footer">
      <div className="content">
        <div className="info">
          <div className="three">
            <img src={require("../../img/phone.png")} alt="" />
            <span>400-6688-311</span>
          </div>
          <div className="three">
            <img src={require("../../img/location.png")} alt="" />
            <span>北京市朝阳区曙光西里甲6号院8号楼南区9层909室</span>
          </div>
          <div className="three">
            <img src={require("../../img/email.png")} alt="" />
            <span>join-us@helijia.com meiti@helijia.com</span>
          </div>
        </div>
        <div className="copyright">
          <ul>
            <li>
              <button>服务协议</button>
            </li>
            <span></span>
            <li>
              <button>平台规则</button>
            </li>
            <span></span>
            <li>
              <button>服务承诺</button>
            </li>
            <span></span>
            <li>
              <button>服务保障</button>
            </li>
            <span></span>
            <li>
              <button>隐私政策</button>
            </li>
            <span></span>
            <li>
              <button>用户协议</button>
            </li>
            <span></span>
            <li>
              <button>营业执照</button>
            </li>
            <span></span>
            <li>
              <a
                className="click"
                target="_black"
                href="https://www.helijia.com/sitemap"
              >
                网站地图
              </a>
            </li>
          </ul>
          <div className="bot">
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502031703">
              <img src={require("../../img/ghs.png")} alt="" />
              <span>公安网京公网安备 11010502031703 号</span>
            </a>
            <span>京ICP备14055009号-1</span>
            <span>京B2-20202082</span>
            <button>互联网药品信息服务资格证编号(京)-非经营性-2020-0003</button>
          </div>
          <span>©2017-2020 北京河狸家信息技术有限公司</span>
        </div>
      </div>
    </div>
  );
}
