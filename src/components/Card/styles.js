import styled from "styled-components";

export const Container = styled.div`
  width: 21.0rem;
  height: fit-content;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;

  border: 1px solid #000204;
  border-radius: .8rem;

  button:nth-child(1) {
    align-self: flex-end;
    border: none;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin: 1.2rem 0 1.6rem 0;

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }

  button {
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    background: transparent;
  }
`

export const PlateName = styled.div`
  display: flex;
  align-items: center;
  gap: .2rem;
  margin: 1.2rem 0 ;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: none;
    background: transparent;
  }
`

export const Value = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.6rem;


  text-align: center;

  color: ${({ theme }) => theme.COLORS.CYAN};
`