import styled from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;

`

export const Description = styled.div`
  width: 42rem;
  margin: 4.4rem auto 6rem;
  border-radius: .2rem;

  font-family: 'Poppins';

  display: flex;
  align-items: center;

  position: relative;
  
  &::after {
    content: "";
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    position: absolute;
    width: 100%;
    height: 85%;
    z-index: -1;
    bottom: 0;
    left: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;

    h2 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`