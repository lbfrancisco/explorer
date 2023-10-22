import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "new-note content";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2.4rem;

  list-style: none;
  padding-top: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Search = styled.div`
  grid-area: search;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const NewNote = styled(Link)`
  grid-area: new-note;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  > span {
    font-size: 1.8rem;
  }
`;
