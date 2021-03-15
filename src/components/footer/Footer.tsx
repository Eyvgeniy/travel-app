import * as React from "react";
import "./Footer.css";

const Footer = (): JSX.Element => {
  return (
    <div className="light-gray d-flex align-items-center justify-content-center">
      <div className="w-100 d-flex justify-content-around m-3">
        <div>RS School</div>
        <div>Github</div>
        <div>2021</div>
      </div>
    </div>
  );
};

export default Footer;
