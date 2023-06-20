import styled from "styled-components";

export const Container = styled.section`
  margin-right: 2.4rem;

  h2 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 16px;
`