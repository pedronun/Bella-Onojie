import Logo from "../../assets/logo.svg";
import BurguerIcon from "../BurguerMenu/BurguerIcon";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo Website" height="101" width="206" />
      </div>
      <div>
        <BurguerIcon />
      </div>
    </Container>
  );
};

export default Header;
