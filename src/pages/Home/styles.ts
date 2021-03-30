import styled from "styled-components";

import BackgroundTopSVG from "../../assets/backgroundtop.svg";
import BackgroundBottomSVG from "../../assets/backgroundbottom.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BackgroundTop = styled.div`
  background: url(${BackgroundTopSVG}) no-repeat;
  background-size: cover;
  background-attachment: fixed;

  height: 620px;
  width: 100%;

  h3 {
    color: #f7f7f7;

    font-family: "Montserrat";
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    letter-spacing: 0.1px;
    margin-top: 70px;
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
      line-height: 24px;
    }

    h1 {
      color: #252b42;
      font-size: 36px;
      line-height: 42px;
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
    width: 236px;
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
    align-items: center;

    button {
      &:last-child {
        color: var(--orange);
        border: 1px solid var(--orange);
        margin-top: 17px;
      }
    }
  }
`;

export const PhonesContainer = styled.div`
  margin-top: -230px;

  @media only screen and (max-device-width: 425px) {
    margin-top: 0px;

    img {
      width: 425px;
    }
  }
`;

export const BackgroundBottom = styled.div`
  width: 100%;
  height: 516px;

  background: url(${BackgroundBottomSVG}) no-repeat;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: #fff;
    font-family: "Montserrat";
    font-size: 40px;
    line-height: 57px;
    letter-spacing: 0.2px;
    text-align: center;
    margin-bottom: 20px;
  }

  h4 {
    color: #fff;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.2px;
    text-align: center;
  }

  @media only screen and (max-width: 425px) {
    background: #252b42;
  }
`;

export const ButtonBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    border: none;
    font-size: 20px;

    padding: 18px 31px;
    margin: 6px 34px;
    border-radius: 30px;
    color: #fff;

    margin-top: 60px;

    &:first-child {
      background: var(--orange);
    }

    &:last-child {
      background: transparent;
      border: 1px solid #fff;
    }
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: row;
    align-items: center;

    button {
      width: 137px;
      height: 64px;
      font-size: 14px;
      border-radius: 10px;
      padding: 18px 31px;
    }
  }
`;
