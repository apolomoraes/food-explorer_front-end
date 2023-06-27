import styled from 'styled-components';

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
`

export const Content = styled.div`
  padding: 2rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  h1 {
    margin: 3.5rem 0 2.4rem;

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 500;
    font-size: 3.2rem;
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`