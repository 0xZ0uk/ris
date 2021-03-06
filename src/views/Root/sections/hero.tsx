import React from "react";
import { Col } from "react-grid-system";
import Logo from "../../../assets/logo_anim.gif";

const Hero = () => {
  return (
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={Logo}
        alt="ris logo"
        style={{ width: "40%", margin: "0 auto" }}
      />
    </Col>
  );
};

export default Hero;
