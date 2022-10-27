import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <>
      <footer>
        <p className="footerP"> 加油 </p>
        <p className="footerP">
          Created by
          <a href="https://github.com/Mai-Saber" target="blank">
            {" "}
            Mai Saber
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
