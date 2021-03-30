import { Container, App } from "./styles";

import { useEffect, useState } from "react";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ConsumedApi = () => {
  const [card, setCard] = useState<Card[]>([]);

  useEffect(() => {
    fetch("https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards")
      .then((response) => response.json())
      .then((data) => setCard(data.items));
  }, []);

  return (
    <Container>
      <h1>How the app works</h1>

      {card.map((card) => {
        return (
          <App key={card.id}>
            <div>
              <img src={card.image} alt="Phone" />
            </div>
            <div className="text-app">
              <h3>{card.subtitle}</h3>
              <h2>{card.title}</h2>
              <h4>{card.description}</h4>
            </div>
          </App>
        );
      })}
    </Container>
  );
};

export default ConsumedApi;
