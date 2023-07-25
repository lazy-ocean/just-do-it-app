import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer__txt">
        Made with{" "}
        <img className="heart" src="../../img/heart.svg" alt="heart" />
        &nbsp;in 2021 by&nbsp;
        <a
          className="link nofocus"
          href="https://lazy-ocean.github.io/"
          rel="noreferrer"
          target="_blank"
        >
          Vladlena&nbsp;Panchenko.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
