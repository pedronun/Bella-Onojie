import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 60px;
  right: 25px;

  z-index: 20;

  display: none;

  @media only screen and (max-device-width: 425px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--text);
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
