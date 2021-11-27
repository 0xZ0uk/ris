import styled from "@emotion/styled";

export const MainboxContainer = styled("div")({
  position: "absolute",
  backgroundColor: "black",
  width: "100%",
  minHeight: "520px",
  border: "5px solid white",
  borderRadius: 5,
  zIndex: 10,
});

export const MainboxContainerShadow = styled("div")({
  position: "relative",
  top: -30,
  left: -30,
  width: "102%",
  minHeight: "520px",
  border: "5px solid white",
  borderRadius: 5,
  zIndex: 1,
});

export const MainboxTitleContainer = styled("div")({
  margin: "0 3%",
});

export const MainboxDivider = styled("div")({
  height: 5,
  width: "100%",
  display: "flex",
  borderRadius: 5,
  backgroundColor: "white",
});

export const MainboxBallFull = styled("div")({
  height: "30px",
  width: "30px",
  backgroundColor: "#fff",
  borderRadius: "100%",
});

export const MainboxBallEmpty = styled("div")({
  height: "30px",
  width: "30px",
  border: "5px solid white",
  borderRadius: "100%",
  boxSizing: "border-box",
});

export const MainboxChildrenContainer = styled("div")({
  display: "flex",
  margin: "0 3%",
  color: "#fff",
});
