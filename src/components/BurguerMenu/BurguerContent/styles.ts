import styled from "styled-components";

interface ListProps {
  open: boolean;
}

export const List = styled.ul<ListProps>`
  display: flex;
  list-style: none;
  flex-direction: row;

  li {
    margin-right: 114px;

    &:first-child {
      color: var(--orange);
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-device-width: 425px) {
    flex-direction: column;
    background: #f3f3f3;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    li {
      margin-right: 0;
      padding: 30px;
    }
  }
`;
