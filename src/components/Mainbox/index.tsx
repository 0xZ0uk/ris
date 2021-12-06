import React from "react";
import { Hidden } from "react-grid-system";
import {
  MainboxBallEmpty,
  MainboxBallFull,
  MainboxChildrenContainer,
  MainboxContainer,
  MainboxContainerShadow,
  MainboxDivider,
  MainboxTitleContainer,
} from "./styled";

interface Props {
  title: string;
  children: any;
  menuAnchor?: string;
  borderColor?: string;
  textColor?: string;
  containerMargin?: string;
}

const Mainbox = ({
  title,
  borderColor = "#e2ac00",
  textColor = "#8c18e8",
  menuAnchor = "mainbox",
  containerMargin,
  children,
}: Props) => {
  return (
    <div style={{ margin: "150px 0" }} id={menuAnchor}>
      <MainboxContainer style={{ borderColor: borderColor }}>
        <MainboxTitleContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ color: textColor, textTransform: "uppercase" }}>
              {title}
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "13%",
              }}
            >
              <Hidden xs sm>
                <MainboxBallEmpty style={{ borderColor: textColor }} />
                <MainboxBallFull style={{ backgroundColor: textColor }} />
                <MainboxBallFull style={{ backgroundColor: textColor }} />
              </Hidden>
            </div>
          </div>
          <MainboxDivider style={{ backgroundColor: borderColor }} />
        </MainboxTitleContainer>
        <MainboxChildrenContainer style={{ marginTop: containerMargin }}>{children}</MainboxChildrenContainer>
      </MainboxContainer>
      <MainboxContainerShadow style={{ borderColor: borderColor }} />
    </div>
  );
};

export default Mainbox;
