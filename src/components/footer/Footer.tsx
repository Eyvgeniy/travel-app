import * as React from "react";
import "./Footer.css";
import rsSchool from "../../../public/assets/images/RSSchool.svg";
import githubImage from "../../../public/assets/images/gitHub.png";

const Footer = (): JSX.Element => {
  return (
    <div className="light-gray d-flex align-items-center justify-content-center">
      <div className="w-100 d-flex justify-content-around m-3">
        <div>
          <a href="https://rs.school/react/">
            <img src={rsSchool} width="48" height="32" alt="github link" />
          </a>
        </div>
        <div className="d-flex flex-wrap justify-content-between ml-4">
          <div>
            <a href="https://github.com/Eyvgeniy">
              <img src={githubImage} width="24" alt="github link" />
              @eyvgeniy
            </a>
          </div>
          <div>
            <a href="https://github.com/MrBlacky01">
              <img src={githubImage} width="24" alt="github link" />
              @MrBlacky01
            </a>
          </div>
          <div>
            <a href="https://github.com/Natallia22">
              <img src={githubImage} width="24" alt="github link" />
              @Natallia22
            </a>
          </div>
          <div>
            <a href="https://github.com/MAXONVTEC">
              <img src={githubImage} width="24" alt="github link" />
              @MAXONVTEC
            </a>
          </div>
        </div>
        <div>© 2021</div>
      </div>
    </div>
  );
};

export default Footer;
