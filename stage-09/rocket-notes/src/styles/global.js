import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }

  ::-webkit-scrollbar {
    width: 1.4rem;
  }

  ::-webkit-scrollbar-thumb {
    border: .4rem solid transparent;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    background-clip: padding-box;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 1rem;
  }


`;
