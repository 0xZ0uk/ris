import React from "react";
import { Container } from "react-grid-system";
import Menu from "../Menu";

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <Container fluid>
      <Menu />
      {children}
    </Container>
  );
};

export default Layout;
