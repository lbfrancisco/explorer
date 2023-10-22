import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
  border-radius: 1rem;
  padding-inline: 2rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 5.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: transparent;
    border: none;

    svg {
      width: 2.4rem;
      height: 2.4rem;

      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
    }
  }
`;
