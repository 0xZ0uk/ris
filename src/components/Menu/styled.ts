import styled from "@emotion/styled";
import { colors } from "../../utils/constants";

export const MenuContainer = styled("div")({
  display: "inline",
  paddingTop: "30px",
});

export const MenuToggled = styled("div")({
  position: "absolute",
  zIndex: 100,
});

export const MenuItemsContainer = styled("ul")({
  listStyle: "none",
  marginBlockStart: 0,
  marginBlockEnd: 0,
});

export const MenuItem = styled("li")({
  color: colors.primary,
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase",
  margin: "20px 0 20px -40px",
});

export const MenuItemLink = styled("a")({
  color: colors.primary,
  textDecoration: "none",
});
