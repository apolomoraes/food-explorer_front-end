import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_SIGN};

  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.8rem 0 2.8rem;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: relative;

    div {
      display: grid;
      place-items: center;

      position: absolute;
      width: 2rem;
      height: 2rem;

      top: -12px;
      left: 15px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_300};
      border-radius: 99px;

      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-weight: 500;
      font-size: 1.4rem;
    }
  }
`;