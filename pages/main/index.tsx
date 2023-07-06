import React from "react";

import Image from "next/image";

import { Header, Homebody, Maincontainer } from "./styles";
import Tabbar from "../../Components/TabBar";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Maincontainer>
      <Header>
        <Image
          className="title"
          src={"/Title.png"}
          alt="/"
          width={65}
          height={60}
        />
        <Image
          className="message"
          src={"/Message.png"}
          alt="/"
          width={24}
          
          height={24}
        />
      </Header>
      <Homebody>
        <Image src={"/Pill.png"} alt="/" width={191} height={40} />
        <Tabbar />
      </Homebody>
    </Maincontainer>
  );
};

export default Home;
