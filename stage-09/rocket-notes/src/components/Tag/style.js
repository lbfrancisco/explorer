import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 0.8rem;
`;
