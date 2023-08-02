import styled from '@emotion/styled';

export const Background = styled.div`
  width: 20vh;
  height: 20vh;
  background-color: #bac0ca;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: 3vh;
  }

  & button {
    margin-top: 5vh;
  }
`;
