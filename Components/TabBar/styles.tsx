import styled from '@emotion/styled';

export const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
  background-color: white;
  height: 60px;
  width: 100%;

  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #4848495f;
`;

export const TabIcon = styled.div`
  font-size: 30px;
  color: #4848495f;

  &:hover {
    color: #3c3c3c;
    transition: 0.5s ease-in-out;
  }
`;
