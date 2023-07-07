import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface IProps {
  isVisible: boolean;
  chatBotHandler?: () => void;
}

const theme = {
  colors: {
    darkGray: '#A9A9A9',
    lightPurple: '#d39be9',
    white: '#FFFFFF',
    mainPurple: '#7f11ab',
    lightPink: '#e46fca',
    sliverGray: '#5e525c',
    deepPurple: '#740e5e',
  },
};

/* ${flexBox('col', 'center', 'center')} */
export const Main = styled.div<IProps>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  width: 100%;
  height: 50%;
  padding: 3rem;

  flex-direction: column;
  background-color: ${theme.colors.white};
  align-items: center;
  border-radius: 16px;
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  z-index: 9;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  overflow: scroll;
`;

/* ${flexBox('row', 'start', 'start')} */
export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

export const Chat = styled.div`
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  background-color: #eef1f4;
  border-radius: 16px;
  margin-bottom: 1rem;
  color: #667080;
`;

export const AnswerChat = styled.div`
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: #667080;
  color: white;
  border-radius: 16px;
`;

const button_loading_spinner = keyframes`
    from{
      transform: rotate(0turn);
    }
    to{
      transform: rotate(1turn);
    }
`;
export const LoadingBox = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${button_loading_spinner} 1s ease infinite;
`;

/* ${flexBox('row', 'between', 'center')} */
export const QuestionBox = styled.div`
  border: 2px solid #667080;
  padding: 1rem;
  border-radius: 50px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 13px;
  height: 50px;
  width: 50px;
  color: ${theme.colors.white};
  background-color: white;
  border: 2px solid #667080;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const ChatProfileBox = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-right: 1rem;
`;
export const ChatUserProfileBox = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-left: 1rem;
`;
// export const ChatProfile = styled(Image)``;

// export const LoadingIcon = styled(Image)``;

export const ChatInput = styled.input`
  width: 80%;
  padding: 1.2rem;
  margin-right: 20px;
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  :disabled {
    background-color: ${theme.colors.sliverGray};
  }
`;
