import styled from '@emotion/styled';

export const Background = styled.div`
  width: 80%;
  height: 20vh;
  background-color: #bac0ca;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5vh;

  &:not(:last-child) {
    margin-bottom: 2vh;
  }
`;

export const Name = styled.h1`
  font-size: 45px;
  line-height: 1px;
`;

export const Detail = styled.h3`
  font-weight: 300;
  font-size: 30px;
  line-height: 1px;
`;
