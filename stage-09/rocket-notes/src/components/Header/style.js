import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 10.5rem;
  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: transparent;

  > svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
