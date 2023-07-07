import styled from '@emotion/styled';

export const Maincontainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .title {
    padding: 1rem;
    margin-bottom: 1%;
    width: 5%;
    height: 3%;
  }
  & .pill {
    background-color: #eef1f4;
    color: #667080;
    font-weight: 600;
    width: 30%;
    height: 70px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  & .pill_img {
    /* margin-bottom: 10%; */
  }
`;

export const Homebody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
