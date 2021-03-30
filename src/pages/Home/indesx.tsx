import Header from "../../components/Header";
import ConsumedApi from "../../components/Api";
import Footer from "../../components/Footer";

import {
  Container,
  BackgroundTop,
  Button,
  PhonesContainer,
  BackgroundBottom,
  ButtonBottom,
} from "./styles";

import Phones from "../../assets/phones.png";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <BackgroundTop>
          <h3>Food app</h3>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <h4>Download the bella onoje’s food app now on</h4>

          <Button>
            <button type="button">Playstore</button>
            <button type="button">App store</button>
          </Button>
        </BackgroundTop>

        <PhonesContainer>
          <img src={Phones} alt="Phones" />
        </PhonesContainer>

        <ConsumedApi />
        <BackgroundBottom>
          <h2>Download the app now.</h2>
          <h4>
            Available on your favorite store. Start your premium experience now
          </h4>
          <ButtonBottom>
            <button type="button">Playstore</button>
            <button type="button" className="button-bottom">App store</button>
          </ButtonBottom>
        </BackgroundBottom>

        <Footer />
      </Container>
    </>
  );
};

export default Home;
