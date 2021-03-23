import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer__txt">
        Made with{" "}
        <img className="heart" src="../../img/heart.svg" alt="heart" />
        &nbsp;in 2021 by&nbsp;
        <a className="link" href="https://lazy-ocean.github.io/">
          Vladlena Panchenko.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
