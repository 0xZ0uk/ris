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
      <Row>
        <Hero />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8} lg={8}>
          <Mainbox title="Quem Somos" menuAnchor="quemSomos">
            {" "}
          </Mainbox>
          <Mainbox title="Missão" menuAnchor="missao" {...altColors}>
            {" "}
          </Mainbox>
          <Mainbox title="Jogo" menuAnchor="jogo">
            {" "}
          </Mainbox>
          <Mainbox title="Parceiros" menuAnchor="parceiros" {...altColors}>
            {" "}
          </Mainbox>
        </Col>
      </Row>
    </Layout>
  );
};

export default Root;
