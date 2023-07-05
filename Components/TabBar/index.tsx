import React from "react";

import Link from "next/link";

import { TabBarContainer } from "./styles";

const Tabbar = () => {
  return (
    <TabBarContainer>
      <Link href="/main">
        <h1>메인</h1>
      </Link>
      <Link href="/tdo">
        <h1>티디오</h1>
      </Link>
      <Link href="/calendar">
        <h1>캘린더</h1>
      </Link>
    </TabBarContainer>
  );
};

export default Tabbar;
