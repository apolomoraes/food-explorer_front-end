import styled from 'styled-components';

export const Container = styled.div`
display: flex;
 gap: 1.0rem;
 align-items: center;

 > h1 {
  font-family: ${({ theme }) => theme.FONT.FONT_ROBOTO};
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: 4.4rem;
  display: ${(props) => props.display};
  }
`;