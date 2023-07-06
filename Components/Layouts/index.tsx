import React from 'react';

import TabBar from '../TabBar';

const Layouts = (props) => {
  return (
    <div>
      <TabBar />
      {props.children}
    </div>
  );
};

export default Layouts;
