import { useState } from "react";
import Burguer from "../BurguerContent";
import { Container } from "./styles";

const BurguerIcon = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <Container
        open={isOpenMenu}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <div />
        <div />
        <div />
      </Container>
      <Burguer open={isOpenMenu}/>
    </>
  );
};

export default BurguerIcon;
