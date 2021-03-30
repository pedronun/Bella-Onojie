import styled from "styled-components";

export const Container = styled.div`
  border-top: 2px solid #e4e4e4;

  h1 {
    color: #000;
    font-family: "Poppins";
    font-size: 44px;
    line-height: 36px;
    letter-spacing: 0.1px;
    text-align: center;

    margin-top: 72px;
  }

  @media only screen and (max-device-width: 425px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const App = styled.div`
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--orange);
    font-family: "Montserrat";
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
    text-align: left;
  }

  h2 {
    font-family: "Montserrat";
    font-size: 40px;
    line-height: 57px;
    text-align: left;
    margin: 17px auto 27px;
  }

  h4 {
    color: #737373;
    font-family: "Montserrat";
    font-size: 24px;
    line-height: 38px;
    text-align: left;
  }

  img {
    margin-right: 171px;
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.15));
  }

  .text-app {
    width: 561px;
  }

  &:nth-child(3) {
    flex-direction: row-reverse;

    img {
      margin-left: 171px;
      margin-right: 0;
    }
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column-reverse;
    height: 1000px;

    h3 {
      margin-top: 65px;
    }

    h4 {
      margin-bottom: 17px;
    }

    h2,
    h3,
    h4 {
      text-align: center;
    }

    img {
      margin-right: 0px;
      margin-bottom: 45px;
    }

    .text-app {
      width: 90%;
    }

    &:nth-child(3) {
      flex-direction: column-reverse;

      img {
        margin-left: 0;
      }
    }
  }
`;
