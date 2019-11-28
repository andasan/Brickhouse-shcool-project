import React from "react";
import Icons from "./Icons.jsx";
import IMG1 from "../../img/facebook.png";
import IMG2 from "../../img/instagram.png";
import IMG3 from "../../img/twitter-sign.png";
import IMG4 from "../../img/youtube.png";
import LOGO from "../../img/brickhouse_2.png";

import './footer.scss';

const Footer = () => {
  return (
    <section className="footer_container">
      <img className="logo" src={LOGO} />

      <hr />
      <div className="icons">
        <Icons img={IMG1} />
        <Icons img={IMG2} />
        <Icons img={IMG3} />
        <Icons img={IMG4} />
      </div>
      <p className="copy-right">&copy; Brickhouse Venture.2019. </p>
    </section>
  );
};

export default Footer;
