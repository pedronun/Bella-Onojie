import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 223px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .spaced {
    margin-left: 32px;
    margin-right: 32px;
  }

  span {
    font-size: 12px;
    font-family: "Roboto";
    line-height: 18px;
    letter-spacing: 0.1px;
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;

    div {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        margin-bottom: -100px;
      }
    }
  }
`;
