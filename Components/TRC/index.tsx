import type { FC } from 'react';
import React from 'react';

import { Background } from './styles';
import { Name } from '../TDC/styles';

interface Props {
  TRCD: any;
}

const TRC: FC<Props> = ({ TRCD }) => {
  return (
    <Background>
      <Name>{TRCD.name}</Name>
      <button>플러스</button>
    </Background>
  );
};

export default TRC;
