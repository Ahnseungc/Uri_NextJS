import React from 'react';

import Image from 'next/image';

import { Header, Maincontainer } from './styles';
import ChatBot from '../../components/ChatBot';
import Layouts from '../../components/Layouts';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const testhandler = () => {
    return undefined;
  };

  return (
    <Layouts>
      <Maincontainer>
        <Header>
          <Image className="title" src={'/Title.png'} alt="/" width={65} height={60} />
          <div className="pill">
            <p>오늘은 무슨 일이 있었니?</p>
          </div>
        </Header>
        <ChatBot isVisible={true} chatBotHandler={testhandler} />
      </Maincontainer>
    </Layouts>
  );
};

export default Home;
