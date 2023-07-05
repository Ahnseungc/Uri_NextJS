import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { TabBarContainer, TabIcon } from "./styles";

const Tabbar = () => {
  return (
    <TabBarContainer>
      <Link href="/main">
        <TabIcon>
          <FontAwesomeIcon icon={faPlus} />
        </TabIcon>
      </Link>
      <Link href="/tdo">
        <TabIcon>
          <FontAwesomeIcon icon={faPlus} />
        </TabIcon>
      </Link>
      <Link href="/calendar">
        <TabIcon>
          <FontAwesomeIcon icon={faPlus} />
        </TabIcon>
      </Link>
    </TabBarContainer>
  );
};

export default Tabbar;
