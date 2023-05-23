import styled from 'styled-components';

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 31.6rem;

  .logo {
    align-self: flex-start;
  }

  .inputs {
    width: 100%;
    margin: 7.2rem 0 3.2rem 0;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

 > a {
    margin-top: 3.2rem;

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;