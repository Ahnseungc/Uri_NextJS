import React, { useState } from 'react';

import Image from 'next/image';

import { Header, TDCS, TRCS, TRCBOX, TDCSHeader } from './styles';
import Layouts from '../../components/Layouts';
import TDC from '../../components/TDC';
import TRC from '../../components/TRC';

import type { NextPage } from 'next';

const Tdo: NextPage = () => {
  const [data, setData] = useState([
    { name: '', detail: '' },
    { name: '', detail: '' },
    { name: '', detail: '' },
  ]);

  return (
    <Layouts>
      <Header>
        <h1>오늘의 할 일</h1>
      </Header>
      <TDCS>
        <TDCSHeader>
          <h1>오늘은 이런 일을 했어요</h1>
          <Image className="arrow" src={'/AR.png'} alt="/" width={60} height={60} />
        </TDCSHeader>
        {data.map((e, index) => {
          return <TDC key={index} />;
        })}
      </TDCS>
      <TRCS>
        <TDCSHeader>
          <h1>이런 것도 해보는 건 어때요?</h1>
          <Image className="arrow" src={'/AR.png'} alt="/" width={60} height={60} />
        </TDCSHeader>
        <TRCBOX>
          {data.map((e, index) => {
            return <TRC key={index} />;
          })}
        </TRCBOX>
      </TRCS>
    </Layouts>
  );
};

export default Tdo;
