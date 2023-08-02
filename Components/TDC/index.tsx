import type { FC } from 'react';
import React from 'react';

import { Background, Name, Detail } from './styles';

interface Props {
  TDCD: any;
}

const TDC: FC<Props> = ({ TDCD }) => {
  console.log(TDCD);
  return (
    <Background>
      <Name>{TDCD.name}</Name>
      <Detail>{TDCD.detail}</Detail>
    </Background>
  );
};

export default TDC;
