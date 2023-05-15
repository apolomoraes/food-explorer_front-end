import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
  font-family: ${({ theme }) => theme.FONT_ROBOTO};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;

  color: #C4C4CC;
  }
`;

export const Field = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 8px;

  > input {
  width: 100%;

  font-family: ${({ theme }) => theme.FONT_ROBOTO};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: transparent;
  border: 0;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > svg {
      margin: 0 0.3rem 0 1rem;
    }
  }
`;