import Head from "next/head";

import Tabbar from "../Components/TabBar";

import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>test</title>
        <meta name="description" />
      </Head>
      <main></main>
      <Tabbar />
    </div>
  );
};

export default Index;
