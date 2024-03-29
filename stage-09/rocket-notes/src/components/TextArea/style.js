import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  padding: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 1rem;
  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
