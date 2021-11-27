import React from "react";
import { Col, Row } from "react-grid-system";
import Layout from "../../components/Layout";
import Mainbox from "../../components/Mainbox";
import { colors } from "../../utils/constants";
import Hero from "./sections/hero";

const altColors = {
  textColor: colors.primary,
  borderColor: colors.secondary,
};

const Root = () => {
  return (
    <Layout>
      <Row style={{ borderBottom: "1px solid #fff" }}>
        <Hero />
      </Row>
      <Row style={{ borderBottom: "1px solid #fff" }}>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Quem Somos" menuAnchor="quemSomos">
            <div style={{ width: "40%", color: colors.secondary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel eros luctus, vehicula ligula vitae, consectetur tortor.
                Nulla nisi purus, feugiat vitae nunc vel, pulvinar it mauris.
                Etiam placerat sem nisi, et commodo felis aliquam quis. Aenean
                orci augue, gravida at mauris sit amet, feugiat ia culis est.
                Mauris hendrerit feugiat mattis. Sed at tellus ele mentum eros
                feugiat dapibus sit amet vel sem. Fusce sed phar etra tortor, at
                rutrum orci. Aliquam non euismod metus. Quisq ue eget erat in
                nunc lacinia varius. Nunc vitae lorem congue massa pharetra
                blandit. Aliquam ipsum nibh, porttitor eget he ndrerit a,
                scelerisque ac tortor. Cras et mattis nibh. Nulla f acilisi.
                Nullam a nibh ac tortor lacinia ornare.
              </p>
            </div>
          </Mainbox>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid #fff" }}>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Missão" menuAnchor="missao" {...altColors}>
            <div style={{ width: "70%", color: colors.primary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel eros luctus, vehicula ligula vitae, consectetur tortor.
                Nulla nisi purus, feugiat vitae nunc vel, pulvinar it mauris.
                Etiam placerat sem nisi, et commodo felis aliquam quis. Aenean
                orci augue, gravida at mauris sit amet, feugiat ia culis est.
                Mauris hendrerit feugiat mattis. Sed at tellus ele mentum eros
                feugiat dapibus sit amet vel sem. Fusce sed phar etra tortor, at
                rutrum orci. Aliquam non euismod metus. Quisq ue eget erat in
                nunc lacinia varius. Nunc vitae lorem congue massa pharetra
                blandit. Aliquam ipsum nibh, porttitor eget he ndrerit a,
                scelerisque ac tortor. Cras et mattis nibh. Nulla f acilisi.
                Nullam a nibh ac tortor lacinia ornare.
              </p>
            </div>
          </Mainbox>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid #fff" }}>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Jogo" menuAnchor="jogo">
            <div style={{ width: "50%", color: colors.secondary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel eros luctus, vehicula ligula vitae, consectetur tortor.
                Nulla nisi purus, feugiat vitae nunc vel, pulvinar it mauris.
                Etiam placerat sem nisi, et commodo felis aliquam quis. Aenean
                orci augue, gravida at mauris sit amet, feugiat ia culis est.
                Mauris hendrerit feugiat mattis. Sed at tellus ele mentum eros
                feugiat dapibus sit amet vel sem. Fusce sed phar etra tortor, at
                rutrum orci. Aliquam non euismod metus. Quisq ue eget erat in
                nunc lacinia varius. Nunc vitae lorem congue massa pharetra
                blandit. Aliquam ipsum nibh, porttitor eget he ndrerit a,
                scelerisque ac tortor. Cras et mattis nibh. Nulla f acilisi.
                Nullam a nibh ac tortor lacinia ornare.
              </p>
            </div>
          </Mainbox>
        </Col>
      </Row>
      <Row style={{ borderBottom: "1px solid #fff" }}>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Parceiros" menuAnchor="parceiros" {...altColors}>
            {" "}
          </Mainbox>
        </Col>
      </Row>
    </Layout>
  );
};

export default Root;
