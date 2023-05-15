import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }

  body::-webkit-scrollbar {
    width: 0px;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
  }

  body::-webkit-scrollbar-thumb {
    background: white;
    -webkit-box-shadow: none;
  }

  body::-webkit-scrollbar-thumb:window-inactive {
    background: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }
`;