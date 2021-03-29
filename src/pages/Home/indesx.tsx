import Header from "../../components/Header";

import { Container, Button, PhonesContainer } from "./styles";
import Phones from "../../assets/phones.png";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h3>Food app</h3>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <h4>Download the bella onoje’s food app now on</h4>
        </div>

        <Button>
          <button type="button">Playstore</button>
          <button type="button">App store</button>
        </Button>

        <PhonesContainer>
          <img src={Phones} alt="Phones" />
        </PhonesContainer>
      </Container>
    </>
  );
};

export default Home;
