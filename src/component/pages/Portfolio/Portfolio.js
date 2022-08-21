import React from 'react';
import Abletone from '../../images/abletone-dark.jpg';
import SimClick from '../../images/simClick.jpg';
import Biz from '../../images/biz.jpg';
import Blog from '../../images/blog.jpg';
import Main from '../../images/main.jpg';
import SignifyPro from '../../images/signifyPro.jpg';
import FgTelecom from '../../images/fgtelcom.jpg';
import Civil from '../../images/civil.jpg';
import Texas from '../../images/texas.jpg';
import Twe from '../../images/twe.jpg';
import wedding from '../../images/wedding.jpg';
import ecommerce from '../../images/ecommerce.jpg';
import BodyLogic from '../../images/bodylogic.jpg';

export const Portfolio = () => {
  return (
    <section className="section portfolio">
      <div className="container">
        <div className="section__heading">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio__content">
          <ul>
            <li>
              <a href="https://catchthemes.com/demo/abletone-dark/">
                <img src={Abletone} alt="Dark" />
                <div className="caption">Abletone</div>
              </a>
              <p></p>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/simclick-pro/">
                <img src={SimClick} alt="Dark" />
                <div className="caption">Simclick</div>
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/corporate-biz-pro/">
                <img src={Biz} alt="Dark" />
                <div className="caption">Corporate Biz</div>
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/catch-sketch-blog/">
                <img src={Blog} alt="Dark" />
                <div className="caption">Catch Sketch Blog</div>
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/catch-sketch-pro/">
                <img src={Main} alt="Dark" />
                <div className="caption">Catch Sketch</div>
              </a>
            </li>
            <li>
              <a href="http://fgtelecom.com.au/">
                <img src={FgTelecom} alt="Dark" />
                <div className="caption">Fg Telecom</div>
              </a>
            </li>
            <li>
              <a href="https://civilhomes.com.np/">
                <img src={Civil} alt="Dark" />
                <div className="caption">Civil Homes</div>
              </a>
            </li>
            <li>
              <a href="https://9ky.bcf.myftpupload.com/">
                <img src={Texas} alt="Dark" />
                <div className="caption">Texas</div>
              </a>
            </li>
            <li>
              <a href="https://twesupply.com/">
                <img src={Twe} alt="Dark" />
                <div className="caption">TWE Supply</div>
              </a>
            </li>
            <li>
              <a href="https://bodylogic.physio/">
                <img src={BodyLogic} alt="Dark" />
                <div className="caption">BodyLogic</div>
              </a>
            </li>
            <li>
              <a href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={SignifyPro} alt="Dark" />
                <div className="caption">SignifyPro</div>
              </a>
            </li>
            <li>
              <a href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={wedding} alt="Dark" />
                <div className="caption">SignifyPro Wedding</div>
              </a>
            </li>
            <li>
              <a href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={ecommerce} alt="Dark" />
                <div className="caption">SignifyPro Ecommerce</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
