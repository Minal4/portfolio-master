import React from 'react';
import { FaFacebook, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/minal.munakarmi/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/minal-munakarmi-240692a3/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Minal4">
                  <FaGithubSquare />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="copyright-text">
              <p>{`Copyright © ${new Date().getFullYear()} Minal | All Rights Reserved`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
