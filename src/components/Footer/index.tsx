import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <FaTwitter color="#FA4A0C" size="32" />
        <AiFillFacebook color="#FA4A0C" size="32" className="spaced" />
        <AiFillInstagram color="#FA4A0C" size="32" />
      </div>
      <div>
        <span>Copyright 2020 Bella Onojie.com</span>
      </div>
    </Container>
  );
};

export default Footer;
