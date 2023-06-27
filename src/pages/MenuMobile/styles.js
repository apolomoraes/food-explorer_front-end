import styled, { keyframes } from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Container = styled.div`
  min-width: 30rem;
  height: 100vh;

  display: grid;

  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
  "header"
  "content"
  "footer"
;

  overflow-x: hidden;

  @media(min-width: 1024px) {
    display: none;
  }
`

export const Header = styled.div`
  grid-area: header;

  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SIGN};

  display: flex;
  align-items: center;

  padding-left: 2.8rem;
  
  > a {
    display: flex;
    align-items: center;
    gap: 1.6rem;


    svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
    font-size: 2.1rem;
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }
  }
`

export const Close = styled(AiOutlineClose)`
  animation: ${rotateAnimation} 0.3s ease-in-out;
`

export const Content = styled.div`
  grid-area: content;

  overflow-x: hidden;


  display: flex;
  flex-direction: column;

  padding: 3.6rem 2.8rem 0;

  align-items: center;

   a {
    align-self: flex-start;

    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 300;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
    padding-bottom: 1rem;
  }

  a:not(:first-child):nth-of-type(n + 2) {
      margin-top: 1rem;
    }
`

export const Search = styled.div`
  display: flex;
  margin: 0 auto 4.6rem;

  width: 100%;

  height: 4.8rem;
  padding: 1.2rem 1.4rem;

  align-items: center;
  gap: 1.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 8px;

  > svg {
    margin: 0 0.3rem 0 1rem;
  }

  > input {
    font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`
