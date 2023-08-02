import React, { useState } from 'react';

import Image from 'next/image';

import { Header, TDCS, TRCS, TRCBOX, TDCSHeader } from './styles';
import Layouts from '../../components/Layouts';
import TDC from '../../components/TDC';
import TRC from '../../components/TRC';

import type { NextPage } from 'next';

const Tdo: NextPage = () => {
  const [TRCdata, setTRCData] = useState([
    { name: '숙제하기', detail: '' },
    { name: '일기쓰기', detail: '' },
    { name: '운동하기', detail: '' },
  ]);

  const [TDCdata, setTDCData] = useState([
    { name: '동네를 한바퀴 산책하기', detail: '한바퀴 산책하면서 바람맞았어요' },
    { name: '맛있는 간식 먹기', detail: '오늘도 수고한 나에게 맛있는 간식을 선물해요' },
    { name: '나른하게 낮잠자기', detail: '낮잠을 자는 것은 피로회복에 큰 도움이 돼요' },
    { name: '즐겁게 샤워하기', detail: '샤워를 하며 상쾌한 기분을 느꼈어요' },
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
        {TDCdata.map((e, index) => {
          return <TDC key={index} TDCD={e} />;
        })}
      </TDCS>
      <TRCS>
        <TDCSHeader>
          <h1>이런 것도 해보는 건 어때요?</h1>
          <Image className="arrow" src={'/AR.png'} alt="/" width={60} height={60} />
        </TDCSHeader>
        <TRCBOX>
          {TRCdata.map((e, index) => {
            return <TRC key={index} TRCD={e} />;
          })}
        </TRCBOX>
      </TRCS>
    </Layouts>
  );
};

export default Tdo;
