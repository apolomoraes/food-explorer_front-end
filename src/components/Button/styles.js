import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 3.2rem;

  background-color: ${props => props.backgroundColor};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 5px;

  font-family: ${({ theme }) => theme.FONT_POPPINS};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;