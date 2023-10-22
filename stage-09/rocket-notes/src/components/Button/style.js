import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  font-weight: 500;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;
