import styled from "styled-components";

import BackgroundTop from "../../assets/backgroundtop.svg";

export const Container = styled.div`
  background: url(${BackgroundTop}) no-repeat;
  background-size: cover;
  background-attachment: fixed;

  height: 620px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h3 {
    color: #f7f7f7;

    font-family: "Montserrat";
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    letter-spacing: 0.1px;
    margin-top: 4.375rem;
  }

  h1 {
    color: #fff;

    font-family: "Poppins";
    font-size: 58px;
    text-align: center;
    line-height: 80px;
    letter-spacing: 0.2px;

    margin: 17px 250px 27px;
  }

  h4 {
    color: #f6f6f6;

    font-weight: 500;
    font-family: "Montserrat";
    text-align: center;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.2px;
  }

  @media only screen and (max-device-width: 425px) {
    background: #fff;

    h3 {
      color: var(--text);
      font-size: 16px;
    }

    h1 {
      color: #252b42;
      text-align: center;
      font-size: 36px;
      margin: 17px 11.5px 27px;
    }

    h4 {
      color: var(--text);
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 54px;

  button {
    border: none;
    font-size: 20px;

    padding: 16px 55px;
    margin: 6px 34px;
    border-radius: 30px;
    color: #fff;

    &:first-child {
      background: var(--orange);
    }

    &:last-child {
      background: transparent;
      border: 1px solid #fff;
    }
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;
    button {
      &:last-child {
        color: var(--orange);
        background: transparent;
        border: 1px solid var(--orange);
        margin-top: 17px;
      }
    }
  }
`;

export const PhonesContainer = styled.div`
  margin-top: -120px;

  @media only screen and (max-device-width: 425px) {
    margin-top: -60px;

    img {
        width: 425px;
    }
  }
`;
