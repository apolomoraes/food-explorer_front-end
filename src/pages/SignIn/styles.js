import styled from 'styled-components';

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;
  display: flex;
  justify-content: center;
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

  a {
    margin-top: 3.2rem;

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }


  @media(min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10.8rem;
    max-width: 1368px;

    .logo {
      align-self: center;
    }

    .wrapper {
      min-width: 47.6rem;
      min-height: 54rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SIGN};

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3.2rem;
      
      padding: 6.4rem;
      border-radius: 1.6rem;
    }

  }
`;