import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 6.4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 56rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > a button:last-child {
    margin-top: 6.4rem;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p {
    margin-top: 1.6rem;
    text-align: justify;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  font-weight: 500;
  padding: 0 1.6rem;
  margin-top: 5.6rem;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;
