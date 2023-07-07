import React, { useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { faArrowUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  Box,
  Chat,
  ChatBox,
  ChatProfileBox,
  ChatUserProfileBox,
  ChatInput,
  SubmitButton,
  Main,
  LoadingBox,
  AnswerChat,
  QuestionBox,
} from './styles';

interface IProps {
  isVisible: boolean;
  chatBotHandler?: () => void;
}

const ChatBot = ({ isVisible, chatBotHandler }: IProps) => {
  const API_KEY = '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';
  const [questions, setQuestions] = useState<any>();
  const [chat, setChat] = useState<any>([]);
  const [waitAnswer, setWaitAnswer] = useState(false);

  const chatAi = async (data: string) => {
    try {
      const pos = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: `${data}`,
          temperature: 0.9,
          max_tokens: 521,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [' Human:', ' AI:'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_KEY,
          },
        },
      );
      console.log(pos);

      setChat((prev: any) => [...prev, { text: pos.data.choices[0].text, id: pos.data.id }]);

      // console.log(chat[0].text);
      setWaitAnswer((prev) => !prev);
    } catch (err) {
      console.log(err);
      setWaitAnswer((prev) => !prev);
      alert('오류가 발생 하였습니다.');
      setQuestions('');
      setChat([]);
    }
  };

  const questionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestions(e.target.value);
  };

  const submitQuestion = () => {
    if (!questions) {
      return undefined;
    }
    setWaitAnswer((prev) => !prev);
    setChat((prev: any) => [...prev, { text: questions, id: uuidv4() }]);
    chatAi(questions);
    setQuestions('');
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitQuestion();
    }
  };

  return (
    <Main isVisible={isVisible}>
      <Box>
        {chat.map((el: any, idx: number) => {
          console.log(idx);
          return (
            <React.Fragment key={el.id}>
              {idx % 2 === 0 ? (
                <ChatBox>
                  <Chat>{el.text}</Chat>
                  <ChatUserProfileBox>{/* <ChatProfile src={User} alt="User" fill={true} /> */}</ChatUserProfileBox>
                </ChatBox>
              ) : (
                <ChatBox>
                  <ChatProfileBox>{/* <ChatProfile src={Bot} alt="User" fill={true} /> */}</ChatProfileBox>
                  <AnswerChat>{el.text}</AnswerChat>
                </ChatBox>
              )}
            </React.Fragment>
          );
        })}
      </Box>

      <QuestionBox>
        <ChatInput
          onChange={questionsHandler}
          value={questions || ''}
          onKeyDown={onKeyPress}
          disabled={waitAnswer}
          placeholder="input text"
        />
        <SubmitButton type="submit" onClick={submitQuestion} disabled={waitAnswer}>
          {waitAnswer ? (
            <LoadingBox>{<FontAwesomeIcon icon={faSpinner} style={{ color: 'black' }} />}</LoadingBox>
          ) : (
            <FontAwesomeIcon icon={faArrowUp} style={{ color: 'black' }} />
          )}
        </SubmitButton>
      </QuestionBox>
    </Main>
  );
};

export default ChatBot;
