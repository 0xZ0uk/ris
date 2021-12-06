import React from "react";
import { Col, Row } from "react-grid-system";
import Divider from "../../components/Divider";
import Layout from "../../components/Layout";
import Mainbox from "../../components/Mainbox";
import Partner from "../../components/Partner";
import { colors } from "../../utils/constants";
import Hero from "./sections/hero";
import IplEnabled from "../../assets/parceiros/ipl-enabled-y.png";
import IplDisabled from "../../assets/parceiros/ipl-disabled.png";
import SUEnabled from "../../assets/parceiros/suleiria-enabled-y.png";
import SUDisabled from "../../assets/parceiros/suleiria-disabled.png";

const altColors = {
  textColor: colors.primary,
  borderColor: colors.secondary,
};

const Root = () => {
  return (
    <Layout>
      <Row  style={{ borderBottom: "1px solid #fff" }}>
        <Hero />
      </Row>      
      <Row id="quemSomos">
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Quem Somos">
            <div style={{ width: "40%", color: colors.secondary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                Queres descobrir quem somos descobre primeiro o que fazemos! 
              </p>
            </div>
          </Mainbox>
        </Col>
        <Divider id="missao" />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Missão" {...altColors}>
            <div style={{ width: "70%", color: colors.primary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                A OVIP tem como principal missão transmitir e valorizar o conhecimento junto de toda a comunidade. Como? Descobre o que fazemos.
              </p>
            </div>
          </Mainbox>
        </Col>
        <Divider alignment="right" id="jogo" />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="A Equipa">
            <div style={{ width: "50%", color: colors.secondary }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: 1.25,
                }}
              >
                Somos uma equipa jovem e multidisciplinar focada em contribuir para dar vida à nossa missão.
              </p>
            </div>
          </Mainbox>
        </Col>
        <Divider id="parceiros" />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Parceiros" containerMargin={"90px"} {...altColors} >
            <>
              <div style={{ width: "50%", display: 'flex', alignItems: 'center' }}><Partner name="IPL" enabledImage={IplEnabled} disabledImage={IplDisabled} /></div>
              <div style={{ width: "50%", display: 'flex', alignItems: 'center' }}><Partner name="Start-up Leiria" enabledImage={SUEnabled} disabledImage={SUDisabled} /></div>
            </>
          </Mainbox>
        </Col>
      </Row>
    </Layout>
  );
};

export default Root;
