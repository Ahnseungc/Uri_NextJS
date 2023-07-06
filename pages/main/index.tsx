import React from 'react';

import Image from 'next/image';

import { Header, Homebody, Maincontainer } from './styles';
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
          <Image className="message" src={'/Message.png'} alt="/" width={24} height={24} />
        </Header>
        <Homebody>
          <Image src={'/Pill.png'} alt="/" width={191} height={40} />
        </Homebody>
        <ChatBot isVisible={true} chatBotHandler={testhandler} />
      </Maincontainer>
    </Layouts>
  );
};

export default Home;
