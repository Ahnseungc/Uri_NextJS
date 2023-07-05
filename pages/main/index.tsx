import React from "react";

import Tabbar from "../../Components/TabBar";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      메인 페이지 입니다.
      <Tabbar />
    </div>
  );
};

export default Home;
