import React from "react";
import { Col, Hidden, Row } from "react-grid-system";
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
      <Row  style={{ minHeight: 380, borderBottom: "1px solid #ffffffbb" }}>
        <Hero />
      </Row>      
      <Row id="quemSomos">
        <Col xs={10} md={8} offset={{ xs: 1, md: 2}}>
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
        <Col xs={10} md={8} offset={{ xs: 1, md: 2}}>
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
        <Col xs={10} md={8} offset={{ xs: 1, md: 2}}>
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
        <Col xs={10} md={8} offset={{ xs: 1, md: 2}}>
          <Mainbox title="Parceiros" containerMargin={"90px"} {...altColors} >
            <Hidden xs sm><div style={{ width: "50%", display: 'flex', alignItems: 'center' }}><Partner name="IPL" enabledImage={IplEnabled} disabledImage={IplDisabled} /></div></Hidden>
            <Hidden xs sm><div style={{ width: "50%", display: 'flex', alignItems: 'center' }}><Partner name="Start-up Leiria" enabledImage={SUEnabled} disabledImage={SUDisabled} /></div></Hidden>
            <Hidden md lg xl xxl><div style={{ width: "100%", display: 'flex', alignItems: 'center', marginTop: 20 }}><Partner name="IPL" enabledImage={IplEnabled} disabledImage={IplDisabled} /></div></Hidden>
            <Hidden md lg xl xxl><div style={{ width: "100%", display: 'flex', alignItems: 'center', marginTop: 40  }}><Partner name="Start-up Leiria" enabledImage={SUEnabled} disabledImage={SUDisabled} /></div></Hidden>
          </Mainbox>
        </Col>
      </Row>
    </Layout>
  );
};

export default Root;
