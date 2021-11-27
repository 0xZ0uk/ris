import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { colors } from "../../utils/constants";
import {
  MenuContainer,
  MenuItemsContainer,
  MenuItem,
  MenuToggled,
  MenuItemLink,
} from "./styled";

const Menu = () => {
  const [toggled, setToggled] = React.useState(false);

  const handleSetToggle = () => {
    setToggled(!toggled);
  };

  return (
    <MenuContainer>
      <div style={{ marginTop: 30 }}>
        <GiHamburgerMenu
          color={colors.primary}
          size="55px"
          onClick={handleSetToggle}
        />
      </div>
      {toggled && (
        <MenuToggled>
          <MenuItemsContainer>
            <MenuItem>
              <MenuItemLink href="#quemSomos">Quem Somos</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#missao">Missão</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#jogo">Jogo</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#parceiros">Parceiros</MenuItemLink>
            </MenuItem>
          </MenuItemsContainer>
        </MenuToggled>
      )}
    </MenuContainer>
  );
};

export default Menu;
